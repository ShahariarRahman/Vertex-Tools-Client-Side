import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [userDetail, setUserDetail] = useState({});
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            const url = `https://vertex-tools-api.onrender.com/admin/${email}`;
            fetch(url, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUserDetail(data);
                    setAdmin(data.admin);
                    setAdminLoading(false);
                });
        };
    }, [user])

    return [admin, adminLoading, userDetail];
};

export default useAdmin;