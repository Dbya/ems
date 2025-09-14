import React from "react";
import Empheader from "../../dashboardSmall/Empheader";
import CreateTask from "../Tasklist/CreateTask";
import AllTask from "../Tasklist/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10 bg-gray-700 ">
      <Empheader />
      {/* <div className="p-5 bg-[#1c1c1c] mt-7">
        <form className="flex  w-full items-start justify-between  flex-wrap" action="">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                className=" text-white text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-white">Date</h3>
              <input  className="  text-white  text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-200" type="date" />
            </div>
            <div>
              <h3 className="text-white">Assign To:</h3>
              <input  className=" text-white  text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="employyee name" />
            </div>
            <div>
              <h3 className="text-white">Category</h3>
              <input  className="  text-white  text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="developnmet, design" />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 text-white"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
          </div>

          
        </form>
      </div> */}
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
