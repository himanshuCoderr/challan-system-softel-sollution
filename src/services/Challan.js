import axios from "axios";

async function getChallansCategory() {
  try {
    // console.log( )
    let res = await axios.get(
      "https://apisalon.softelsolutions.in" + "/api/Master/FillVehicleCategory"
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}

async function getChallansResons() {
  try {
    // console.log( )
    let res = await axios.get(
      "https://apisalon.softelsolutions.in" + "/api/Master/FillChallanReason"
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}

async function addChallan(challanData) {
  try {
    const token = await localStorage.getItem("token");
    console.log(token);
    const res = await axios.post(
      "https://apisalon.softelsolutions.in/api/VehicleTow/VehicleTowEntry",
      challanData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("Error adding challan:", error);
    throw error;
  }
}

async function getChallans() {
  try {
    const token = await localStorage.getItem("token");

    const res = await axios.get(
      "https://apisalon.softelsolutions.in/api/VehicleTow/VehicleTowEntryList",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res;
  } catch (error) {
    console.log(error);
  }
}

async function getPaymodes() {
  try {
    // console.log( )
    let res = await axios.get(
      "https://apisalon.softelsolutions.in" + "/api/Master/FillPaymode"
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}

async function getPaymentReceive(data) {
  try {
    const token = await localStorage.getItem("token");
    const res = await axios.post(
      "https://apisalon.softelsolutions.in/api/VehicleTow/PaymentReceiveEntry",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res;
  } catch (error) {
    console.log(error);
  }
}

export {
  getChallansCategory,
  getChallansResons,
  addChallan,
  getChallans,
  getPaymodes,
  getPaymentReceive,
};
