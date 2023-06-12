import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosService from "./useAxiosService";

const useAdmin = () => {
    const {userInfo, loading} = useAuth();
    const [axiosService] = useAxiosService();
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', userInfo?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosService.get(`/api/users/admin/${userInfo?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}

export default useAdmin