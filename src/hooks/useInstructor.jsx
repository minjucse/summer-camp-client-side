import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosService from "./useAxiosService";


const useInstructor = () => {
    const {userInfo, loading} = useAuth();
    const [axiosService] = useAxiosService();
    // use axios secure with react query
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', userInfo?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosService.get(`/api/users/instructor/${userInfo?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
}

export default useInstructor