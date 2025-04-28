import React,{useState,useEffect} from 'react'
import { getPaymodes } from '../services/Challan';

export default function ChallanPaymentForm({open,close,fillChallan,handleMobChange,handlePaymodeChange,handelSavePayment}) {
   
  

  const[paymodes , setPaymodes] = useState([]);

  async function getPaymode() {
    let res = await  getPaymodes();
    setPaymodes(res);
  }

  useEffect(()=>{
     getPaymode();
  },[]);

 

 


  if (!open) return null;

    return (
        <>
         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
             <h2 className="text-xl font-semibold mb-4">Challan Details</h2>
             <form  className="space-y-4">
               <div>
                 <label className="block text-sm font-medium">Challan No</label>
                 <input
                   type="text"
                   name="challanNo"
                   value={fillChallan.challanNo}
                   disabled="disabled"
                   className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                   required
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium">Mobile No</label>
                 <input
                   type="text"
                   name="mobileNo"
                   onChange={handleMobChange}
                   className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                   required
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium">Payment Mode</label>
                 <select
                   name="paymodeId"
                   onChange={handlePaymodeChange}
                   className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                   required
                 >
                   <option value="0">Select</option>
                  {paymodes.map((paymode,index)=>{
                    return <option value={paymode.paymodeId}>{paymode.paymode}</option>
                  })}
                 </select>
               </div>
               <div>
                 <label className="block text-sm font-medium">Amount</label>
                 <input
                   type="number"
                   name="amount"
                 value={fillChallan.amount}
                   disabled="disabled"
                   className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                   required
                 />
               </div>
               <div className="flex justify-end gap-3 pt-4">
                 <button
                   type="button"
                 onClick={close}
                   className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                 >
                   Cancel
                 </button>
                 <button
                   type="submit" onClick={handelSavePayment}
                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                 >
                   Submit
                 </button>
               </div>
             </form>
           </div>
         </div>
        </>
       )



  
}
