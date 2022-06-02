import express from 'express';
import bodyParser from 'body-parser';

const application = express();

application.use(bodyParser.json());

application.get('/', (req, res) => {res.send("Hello")});

application.post('/login', (req, res)=>{
    const userName = loginRequest.body.userName;
    const password =loginRequest.body.password;

    if (userName=="cupcakes123@gmail.com" && password=="Cupcakesarebadforyou_22$"){
        loginResponse.status(200);
        loginResponse.send({Status: "LoggedIn"})
    }
    else{
        loginResponse.status(403);
        loginResponse.send({Status:"FailedLoggingIn"});
    }
})

application.listen(3000,()=>{console.log("Listening...")});