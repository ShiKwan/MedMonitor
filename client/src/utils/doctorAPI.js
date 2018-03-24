import axios from "axios";
export default {

    findAll: function() {
        return axios.get("/api/doctor");
    }, 
    findOne: function(id){
        return axios.get("/api/doctor"+id);
    },
    create: function(){
        return axios.post("/api/doctor");
    },
    remove: function(id){
        return axios.delete("/api/doctor"+id);
    },
    update: function(id, objInfo){
        return axios.put("/api/doctor"+id, objInfo);
    }
};