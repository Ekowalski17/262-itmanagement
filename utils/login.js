import fetch from 'node-fetch';


const login = async (userName, password) => {
    
    const options = {
        method: 'POST',
        body: JSON.stringify({userName,password}),
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'text',

        } 
    };

    console.log(options.method);
    
    const tokenResponse = await fetch('http://34.148.41.13', options)
    const token = await tokenResponse.text();
    return token;
}

export {login};