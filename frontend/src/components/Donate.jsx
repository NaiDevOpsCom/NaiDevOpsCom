import React, { useState } from "react";
import mpesa from "../images/partners/mpesa.png"
 const Donate = () => 
{
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-blue-600 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Donate to Us
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="w-[30vw] border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Donate</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 p-1 rounded-full">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto h-[30vh]">
                  {/* <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    
                  </form> */}
                    <img src={mpesa} className='w-24' alt='mpesa' />
                    <div className="grid grid-cols-2 mt-4 gap-2">
                        <h5 className="font-bold">Paybill Number </h5>
                        <p>522533</p>
                    </div>
                    <div className="grid grid-cols-2 mt-4 gap-2">
                        <h5 className="font-bold">Account Number </h5>
                        <p>7802503</p>
                    </div>
                    <div className="grid grid-cols-2 mt-4 gap-2">
                        <h5 className="font-bold">Businnes Name </h5>
                        <p>Nairobi DevOps Community</p>
                    </div>

                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Donate