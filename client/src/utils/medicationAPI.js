import axios from "axios";
export default {
    newDrug: function(drugInfo) {
        return axios.post("/api/medication", drugInfo);
    }
};