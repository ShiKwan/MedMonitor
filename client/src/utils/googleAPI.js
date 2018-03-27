import axios from "axios";
import moment from "react-moment";

export default {
    createEvent: function(token,objEvent) {
        return axios.post("https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token=" + token, objEvent)
    }
/* 
        $.ajax({
            url: "https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token="+token,
            data : event,
            success : function(data){
                console.log(data);
            }
        }) */
}