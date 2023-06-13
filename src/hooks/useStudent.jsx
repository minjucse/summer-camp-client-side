import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosService from "./useAxiosService";

const useStudent = () => {
    const {userInfo, loading} = useAuth();
    const [axiosService] = useAxiosService();
    // use axios secure with react query
    const {data: isStudent, isLoading: isStudentLoading} = useQuery({
        queryKey: ['isStudent', userInfo?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosService.get(`/api/users/student/${userInfo?.email}`);
            return res.data.instructor;
        }
    })
    return [isStudent, isStudentLoading]
}

export default useStudent