
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

import { Helmet } from "react-helmet-async";
import useAxiosService from "../../../../hooks/useAxiosService";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const PaymentClass = () => {
    const [axiosService] = useAxiosService();
    const { id } = useParams();

    const { data: paymentClass = {}, refetch } = useQuery(['paymentClass'], async () => {
        const res = await axiosService.get(`/api/select-class/${id}`)
        return res.data;

    })
    let test = +paymentClass.price;
    const price = parseFloat(test?.toFixed(2));

    return (
        <div className='card shadow-xl bg-base-100'>
            <Helmet>
                <title>AM Drawing School | Payment</title>
            </Helmet>
            <h2 className='text-center text-3xl mt-8'> My Selected Class List</h2>

            <div>
                
                <Elements stripe={stripePromise}>
                    <CheckoutForm refetch={refetch} cart={paymentClass} price={price}></CheckoutForm>
                </Elements>
            </div>
        </div>
    )
}

export default PaymentClass