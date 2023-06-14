import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState, useContext } from "react";
import "./CheckoutForm.css";
import useAxiosSecure from "../../../../hooks/useAxiosService";
import Swal from "sweetalert2";
import { AuthContext } from '../../../../providers/AuthProvider';
const CheckoutForm = ({ price, cart, refetch }) => {

  const stripe = useStripe();
  const element = useElements();
  const { userInfo } = useContext(AuthContext);
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userInfo?.displayName || "Anonymous",
            email: userInfo?.email || "example@gmail.com",
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
    }

    setProcessing(false);

    if (paymentIntent?.status === "succeeded") {
      setTransactionId("");

      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);
      
      const payment = {
        email: userInfo?.email,
        name: userInfo?.displayName,
        transactionId: paymentIntent.id,
        price,
        quantity: 1,
        cartItem: cart?._id,
        classItemId: cart?.classId,
        image: cart?.classImage,
        course: cart?.name,
        instructorEmail: cart?.instructorEmail,
        instructorName: cart?.instructorName,
        createdAt: new Date().toLocaleString(),
      };


      axiosSecure.post("/payments", payment)
        .then(res => {
          if (res?.data?.result.insertedId) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Payment Success',
              showConfirmButton: false,
              timer: 1500
            })

            refetch()
            // navigate("/dashboard/myclass")

          }
        })

    }
  };
  return (
    <>
      <form className="max-w-full bg-slate-400 py-5 md:p-5 rounded-3xl shadow-lg mx-auto md:w-1/2 " onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center">
          <button
            disabled={!stripe || !clientSecret || processing}
            className="btn btn-wide hover:text-slate-800 text-white bg-[#75d5e3]"
            type="submit"
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-center mt-10 text-red-600">{cardError}</p>
      {transactionId && (
        <p className="text-green-600 text-sm">
          Transaction Id : {transactionId}
        </p>
      )}
    </>
  )
}

export default CheckoutForm