const router = require("express").Router();
const mailer = require("../../mailer/index.js");
 
router.route("/contact")
        .post((req, res) => {
            const { email = '', name = '', message = '' } = req.body
            console.log("email : ", email);
            console.log("name : ", name);
            console.log("message : " , message);
            mailer.send({ email, name, text: message }).then(() => {
            console.log(`Sent the message "${message}" from <${name}> ${email}.`);
            res.redirect('/#success');
            }).catch((error) => {
            console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
            res.redirect('/#error');
            })
});


module.exports = router;
