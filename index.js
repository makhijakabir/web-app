const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    const first = req.body.fName;
    const last = req.body.lName;
    const email = req.body.email;

    console.log(first, last, email);

    if (res.statusCode === 200) {
        res.sendFile(__dirname + "/success.html");
    } else {
        res.sendFile(__dirname + "/retry.html");
    }
});

app.post("/success", function(req, res) {
    res.redirect("/");
});

app.post("/retry", function(req, res) {
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Hey! I am the server speaking!");
});

//API Key
//8f2510f9049217cbdbfb60877b70ee3b-us2

//List ID
//bc53929cfc

//MAILCHIMP API INCLUSION
// const data = {
//     members: [{
//         email_address: email,
//         status: "subscribed",
//         merge_fields: {
//             FNAME: first,
//             LNAME: last
//         }
//     }]
// };
// const jsonData = JSON.stringify(data);
// const url = "https://us2.api.mailchimp.com/3.0/lists/bc53929cfc";
// const options = {
//     method: "POST",
//     auth: "kabir1:8f2510f9049217cbdbfb60877b70ee3b-us2"
// };
// const request = https.request(url, options, function(response) {
//     response.on("data", function(data) {
//         console.log(JSON.parse(data));
//     });
//     request.write(jsonData);
//     request.end();
// });