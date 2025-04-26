import axios from "axios";

let baseUrl = "https://apisalon.softelsolutions.in"

async function login(userName , userPassword) {

        let response = await axios.post(baseUrl + "/api/Login/UserLogin", {
            "userName": userName,
            "password": userPassword
        },
            {
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                }
            }
        )
        return response
    

}


export { login }