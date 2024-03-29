import { useQuery } from "react-query";

const useTools = () => {
    const { data: tools, isLoading, error, refetch } = useQuery('tools', () =>
        fetch('https://vertex-tools-api.onrender.com/tools').then(res =>
            res.json()
        )
    );

    return [tools, isLoading, refetch, error];
}

export default useTools;