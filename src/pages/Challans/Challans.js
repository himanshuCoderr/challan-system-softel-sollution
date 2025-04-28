import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getChallans, getPaymentReceive } from "../../services/Challan";
import ChallanPaymentForm from "../../components/ChallanPaymentForm";
import { toast } from "react-toastify";
const Challans = () => {
  const [challans, setChallans] = useState([]);
  const [challanPayPopup, setChallanPayPopup] = useState(false);
  const [fillChallan, setFillChallan] = useState({});

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  async function getChallan() {
    const res = await getChallans();
    setChallans(res.data.data);
  }

  useEffect(() => {
    getChallan();
  }, []);

  function handleMobChange(e) {
    setFillChallan({
      ...fillChallan,
      mobileNo: e.target.value,
    });
  }
  function handelFillClick(challanData) {
    setChallanPayPopup(true);
    setFillChallan({
      paymentRecEntryId: 0,
      challanNo: challanData.challanNo,
      mobileNo: "",
      paymodeId: 0,
      amount: challanData.amount,
      paymentTag: 0,
    });
  }

  function handlePaymodeChange(e) {
    setFillChallan({
      ...fillChallan,
      paymodeId: e.target.value,
    });
  }

  async function handelSavePayment(e) {
    e.preventDefault();
    debugger;
    let data = { ...fillChallan, paymentTag: 1 };
    let res = await getPaymentReceive(data);
    if (res.data.status === 1) {
      setChallanPayPopup(false);
      getChallan();
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
    // console.log(res);
  }

  return (
    <>
      <div className=" mx-auto ">
        <Navbar />
        <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-5">
          Vehicle Challans
        </h1>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Challan No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reason
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              { challans.map((challan) => (
                <tr
                  key={challan.vehicleToeEntryId}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {challan.challanNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {challan.vehicleNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {challan.vehicleCategory}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {challan.challanReason}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{challan.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(challan.vrDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        challan.paymentReceiveTag
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {challan.paymentReceiveTag ? "Paid" : "Pending"}
                    </span>
                  </td>
                  {challan.paymentReceiveTag ? (
                    ""
                  ) : (
                    <button onClick={() => handelFillClick(challan)}>
                      Fill Challan
                    </button>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ChallanPaymentForm
        open={challanPayPopup}
        close={() => setChallanPayPopup(false)}
        fillChallan={fillChallan}
        handleMobChange={handleMobChange}
        handlePaymodeChange={handlePaymodeChange}
        handelSavePayment={handelSavePayment}
      />
    </>
  );
};

export default Challans;
