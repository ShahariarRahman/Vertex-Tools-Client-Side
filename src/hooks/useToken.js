import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = {
            email,
            role: 'customer'
        }
        if (email) {
            const url = `https://vertex-tools.herokuapp.com/user/${email}`;
            fetch(url, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data?.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                })
        }
    }, [user]);
    return [token];
};

export default useToken;