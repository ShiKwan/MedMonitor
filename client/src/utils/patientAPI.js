import axios from "axios";
export default {
    findAll: function() {
        return axios.get("/api/patient");
    },
    updateContact: function(id, objContact){
        return axios.put("/api/patient/contact/"+id, objContact);
    },
    deleteUser: function(id){
        return axios.put("/api/patient/disable/"+id);
    },
    createNewAppointment : function(id, objAppointment){
        return axios.put("/api/patient/appointment/"+id, objAppointment);
    },
    findPatientInfoForAdmin :function(id){
        return axios.get("/api/patient/forDoctor/"+id);
    },
    findPatientInfo: function(id){
        return axios.get("/api/patient/forPatient/"+id);
    },
    updateEpisodeForAdmin: function(id, objEpisode){
        return axios.put("/api/patient/forDoctor/" +id);
    },
    findEpisode: function(id){
        return axios.get("/api/patient/forPatient/episode/"+id);
    },
    updateEpisode: function(id, objEpisode){
        return axios.put("/api/patient/forPatient/episode/"+id, objEpisode);
    }
};