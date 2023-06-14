
import Container from '../../../Components/Container'
import SectionTitle from '../../../Components/SectionTitle'
import { useQuery } from "@tanstack/react-query";
import useAxiosService from "../../../hooks/useAxiosService";
import { useSpring, animated } from '@react-spring/web';
const PopularClasses = () => {
  const [axiosService] = useAxiosService();

  const { data: popularClasses = [] } = useQuery(['popularClasses'], async () => {
    const res = await axiosService.get('/topclasses')
    return res.data;
  })
  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  })
 
  return (
    <animated.div style={{reverse:true,...springs}}>
      <SectionTitle subHeading="" heading="Popular Classes" ></SectionTitle>
      <div className='mb-12 mt-20'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {
              popularClasses?.map((item, index) => (
                <div key={index}>
                  <div className="card bg-base-100 shadow-xl">
                    <figure><img src={item.classImage} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Name: {item.name}!
                      </h2>
                      <p>Instructor Name: {item.createdName}</p>
                      <p>Available Seats: {item.quantity}</p>
                      <p>Price: {item.price}</p>
                      
                    </div>
                  </div>
                </div>

              ))
            }
          </div>
        </Container>
      </div>

    </animated.div>
  )
}

export default PopularClasses