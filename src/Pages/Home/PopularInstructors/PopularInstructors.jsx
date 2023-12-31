import { useQuery } from "@tanstack/react-query";
import useAxiosService from "../../../hooks/useAxiosService";
import SectionTitle from '../../../Components/SectionTitle'
import Container from '../../../Components/Container'
import { useSpring,animated } from "@react-spring/web";

const PopularInstructors = () => {
  const [axiosService] = useAxiosService();

  const { data: popularInstructors = [] } = useQuery(['popularInstructors'], async () => {
    const res = await axiosService.get('/topInstructor')
    return res.data;
  })
  const styles = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-100px)' },
    // You can customize the animation properties here, like duration and easing
  });

  return (
    <animated.div style={{...styles}}>
      <SectionTitle subHeading="" heading="Popular Instructors" ></SectionTitle>
      <div className='mb-12 mt-20'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {
              popularInstructors?.map((item, index) => (
                <div key={index}>
                  <div className="team-block">
                    <div className='image-box'>
                      <div className='image'>
                        <img src={item.imageURL} alt="" />
                      </div>
                    </div>
                    <div className="lower">
                      <h4><a href="team.html"> {item.name}</a></h4>
                      <div className="designation">{item.email}</div>

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

export default PopularInstructors