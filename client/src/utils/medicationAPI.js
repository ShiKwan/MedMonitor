import axios from "axios";
export default {

    findAll: function() {
        return axios.get("/api/medication");
    }, 

    newDrug: function(drugInfo) {
        return axios.post("/api/medication", drugInfo);
    },

    newDose: function(id, doseInfo){
        return axios.put("/api/medication/dose/"+id, doseInfo);
    },

    deleteDose: function(id){
        return axios.delete("/api/medication/dose/"+id);
    },

    deleteMedication: function(id){
        return axios.delete("/api/medication/"+id)
    }

};