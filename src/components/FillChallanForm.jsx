import React, { useState } from 'react';
import { useEffect } from 'react';
import { getChallansCategory } from '../services/Challan';
import { getChallansResons } from '../services/Challan';
const FillChallanForm = () => {
  let [challansCategory, setChallansCategory] = useState([])
  let [challanResons, setChallanReasons] = useState([])
  
  let [formData, setFormData] = useState({
    vehicleToeEntryId: 0,
    vehicleCategoryId: "",
    vehicleNo: "",
    challanReasonId: "",
    amount: "",
    image1: "",
    image2: "",
    imagePath: ""
  })


  async function getData() {
    let categoryData = await getChallansCategory()
    setChallansCategory(categoryData)
    let reasonsData = await getChallansResons()
    setChallanReasons(reasonsData)
  }
  useEffect(() => {
    getData()

  }, [])



  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Fill Challan Details</h2>
        {console.log(challansCategory)}
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Vehicle Toe Entry ID */}
            <div>
              <label htmlFor="vehicleToeEntryId" className="block text-sm font-medium text-gray-700">
                Vehicle Toe Entry ID
              </label>
              <input
                type="number"
                defaultValue={"0"}
                id="vehicleToeEntryId"
                disabled
                name="vehicleToeEntryId"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Vehicle Category ID */}
            <div>
              <label htmlFor="vehicleCategoryId" className="block text-sm font-medium text-gray-700">
                Vehicle Category ID
              </label>
              <select name="" id="">
                {
                  challansCategory.map((cat) => {
                    return <option>{cat.vehicleCategory}</option>
                  })
                }
              </select>
            </div>

            {/* Vehicle Number */}
            <div>
              <label htmlFor="vehicleNo" className="block text-sm font-medium text-gray-700">
                Vehicle Number
              </label>
              <input
                type="text"
                id="vehicleNo"
                name="vehicleNo"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Challan Reason ID */}
            <div>
              <label htmlFor="challanReasonId" className="block text-sm font-medium text-gray-700">
                Challan Reason ID
              </label>
              <select name="" id="">
                {
                  challanResons.map((rea) => {
                    return <option>{rea.challanReason}</option>
                  })
                }
              </select>
            </div>

            {/* Amount */}
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="space-y-4">
            <div>
              <label htmlFor="image1" className="block text-sm font-medium text-gray-700">
                Image 1
              </label>
              <input
                type="file"
                id="image1"
                name="image1"
                accept="image/*"
                className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
              />
            </div>

            <div>
              <label htmlFor="image2" className="block text-sm font-medium text-gray-700">
                Image 2
              </label>
              <input
                type="file"
                id="image2"
                name="image2"
                accept="image/*"
                className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Challan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FillChallanForm;
