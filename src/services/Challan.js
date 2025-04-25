import axios from "axios";


async function getChallansCategory(){
    try {
        // console.log( )
        let res = await axios.get("https://apisalon.softelsolutions.in" + "/api/Master/FillVehicleCategory")
        return res.data.data
        
    } catch (error) {
        console.log(error)
    }

}


async function getChallansResons(){
    try {
        // console.log( )
        let res = await axios.get("https://apisalon.softelsolutions.in" + "/api/Master/FillChallanReason")
        return res.data.data
        
    } catch (error) {
        console.log(error)
    }
}

export {getChallansCategory , getChallansResons}