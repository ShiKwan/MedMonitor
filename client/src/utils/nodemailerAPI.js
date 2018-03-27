import axios from "axios";
export default {
  sendMail: function(objMessage){
    console.log("in nodemailer api");
    return axios.post("/api/mailer/contact", objMessage)
  }
}
