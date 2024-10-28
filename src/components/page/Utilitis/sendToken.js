import axios from "axios";

const sendToken = async (myForm) => {
  await axios({
    method: "post",
<<<<<<< HEAD
    // url: "http://localhost:5000/user/create",
    url: "http://localhost:5000/user/create",
=======
    // url: "http://207.244.230.118:5000/user/create",
    url: "http://207.244.230.118:5000/user/create",
>>>>>>> 9e080e4f0e88e48ea1ed5c2ec24c25c8a6de7c7e
    data: myForm,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => {
      console.log(res);
      localStorage.setItem("UserToken", res.data.token);
      localStorage.setItem("UserId", res.data.user._id);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default sendToken;
