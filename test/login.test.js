import {login} from "../utils/login.js";

it('Should get login token', async ()=> {
    const loginRequest = {
        userName: "cupcakes123@gmail.com",
        password: "Cupcakesarebadforyou_22$"
    }
    const token = await login(loginRequest);
    console.log ("Token" + token)



})

