import axios from "axios";

const sendToken = async(myForm) => {
  
    await axios({
      method: "post",
      url: "https://boiling-mesa-36077.herokuapp.com/user/create",
      data: myForm,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        localStorage.setItem("UserToken", res.data.token);
        localStorage.setItem("UserId", res.data.user._id);
      })
      .catch((err) => {
        console.log(err);
      });
  
  
};

export default sendToken;
