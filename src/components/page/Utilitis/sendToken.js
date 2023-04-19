import axios from "axios";

const sendToken = async (myForm) => {
    await axios({
      method: "post",
      // url: "https://ecommerce-shop-server-w8qm.vercel.app/user/create",
      url: "https://ecommerce-shop-server-w8qm.vercel.app/user/create",
      data: myForm,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log(res)
        localStorage.setItem("UserToken", res.data.token);
        localStorage.setItem("UserId", res.data.user._id);
      })
      .catch((err) => {
        console.log(err);
      });
  
  
};

export default sendToken;
