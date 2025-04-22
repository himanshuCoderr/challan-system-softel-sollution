import axios from "axios";

let baseUrl = "http://localhost:4000"

async function login(userName , userPassword) {

        let response = await axios.post(baseUrl + "/api/login", {
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