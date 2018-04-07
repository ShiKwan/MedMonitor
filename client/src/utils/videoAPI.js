import axios from "axios";
export default {

    findAll: function () {
        return axios.get("/api/video");
    },
    create: function (alert) {
        return axios.post("/api/video", alert);
    }
};