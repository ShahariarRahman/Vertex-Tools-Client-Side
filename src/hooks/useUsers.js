import { useQuery } from "react-query";

const useUsers = () => {
    const { data: users, isLoading, error, refetch } = useQuery('users', () =>
        fetch('https://vertex-tools-api.onrender.com/user', {
            headers: { 'authorization': `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
    );

    return [users, isLoading, refetch, error];
}

export default useUsers;