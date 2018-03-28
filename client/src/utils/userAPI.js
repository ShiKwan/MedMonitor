import axios from "axios";
export default {
    createAccount: function(objUser) {
        return axios.post("/api/user/register", objUser);
    },
    login : function(objUser){
        return axios.post("/api/user/login", objUser)
    },
    logout : function(){
        return axios.get("/api/user/logout");
    },
    isLoggedIn: function(){
        return axios.get("/api/user/isLoggedIn");
    }
}