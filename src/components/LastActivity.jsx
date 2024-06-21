// src/components/LastActivity.js
// import React from 'react';

const LastActivity = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold mb-6">Last Activity</h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Activity 1</h3>
              <p className="text-sm text-gray-600">Target Date: 2024-06-30</p>
            </div>
            <button className="bg-green-300 text-white px-4 py-2 rounded-lg w-full md:w-auto">View Details</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Activity 2</h3>
              <p className="text-sm text-gray-600">Target Date: 2024-07-15</p>
            </div>
            <button className="bg-red-400 text-white px-4 py-2 rounded-lg w-full md:w-auto">View Details</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default LastActivity;
  