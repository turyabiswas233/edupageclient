import React, { useState } from "react";
import UpdateForm from "./UpdaetPage";
const Coursecard = ({ title, short, imagefile, cPrice, allData }) => {
  const [showUpdate, setUpdate] = useState(false);

  return (
    <div className="my-10 flex flex-wrap justify-center items-center mx-auto">
      {/* all course card container---------------------------------------------------- */}
      <UpdateForm
        allData={allData}
        showMe={showUpdate}
        toggleUpdate={() => setUpdate((pre) => !pre)}
      />

      <div className="w-80 max-w-sm border m-5 mb-10  rounded-lg shadow bg-gray-800 border-gray-700 duration-100">
        <a href="#">
          {
            <img
              className="w-full h-48 aspect-video rounded-t-lg object-cover"
              src={"/avatar.jpg"}
              alt="product image"
            />
          }
        </a>
        <div className="px-5 pb-5">
          <h5 className="text-3xl text-left font-bold tracking-tight text-white my-4">
            {allData?.title || "Title"}
          </h5>

          <p className="text-left text-slate-400">
            {allData?.shortDesc ||
              "Dolor voluptua clita sit takimata sanctus. Invidunt elitr diam ipsum stet sit justo, stet nonumy nonumy ea sanctus clita accusam."}
          </p>

          <div className="flex flex-col justify-between">
            <span className="text-2xl font-bold uppercase text-white m-0 text-left mt-4">
              {allData?.cPrice || "2000 tk"}
            </span>
            <div className="flex justify-between items-center w-full mt-4">
              <button
                className="text-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-yellow-300 hover:bg-yellow-400 hover:text-black "
                onClick={() => setUpdate((pre) => !pre)}
              >
                Update
              </button>
              <button className="text-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-rose-500 hover:bg-yellow-400 hover:text-black ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursecard;
