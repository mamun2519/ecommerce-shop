import { useEffect, useState } from "react";

const useAdmins = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
<<<<<<< HEAD
      fetch(`http://localhost:5000/user/chackAdmin/${email}`, {
=======
      fetch(`http://207.244.230.118:5000/user/chackAdmin/${email}`, {
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("UserToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmins;
