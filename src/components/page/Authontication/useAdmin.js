import { useEffect, useState } from "react"


const useAdmins = (user) =>{

      const [admin , setAdmin] = useState(false)
      const [adminLoading , setAdminLoading] = useState(true)

      useEffect(()=>{
            const email = user?.email
            if(email){
                  fetch(`https://boiling-mesa-36077.herokuapp.com/user/chackAdmin/${email}` , {
                        method: "GET",
                        headers:{
                              "authorization": `Bearer ${localStorage.getItem('UserToken')}`
                        }
                  })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        setAdmin(data.admin)
                        setAdminLoading(false)
                  })
            }

      },[user])



      return [admin , adminLoading]
          
}

export default useAdmins