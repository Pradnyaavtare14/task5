// import React from 'react';
import ActivityChart from "./ActivityChart";
import LastActivity from "./LastActivity";

const Dashboard = () => {
  return (
    <div className="flex-1 w-full px-4 md:px-8">
      <div className="flex flex-wrap justify-between items-center mb-8 bg-white p-6 md:p-10 shadow-md">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-lg md:text-xl font-bold">Dashboard Overview</h1>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-light-green rounded-full mr-2 md:mr-4"></div>
          <span className="text-sm md:text-lg font-semibold mr-2 md:mr-4">
            Zachary A.
            <p className="text-xs">Owner Admin</p>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-200 p-4 rounded-lg shadow-md">
          <div className="grid grid-rows-auto min-content">
            <div className="flex items-center">
              <h2 className="text-lg md:text-xl text-sidebar-text font-normal">Facebook</h2>
            </div>
          </div>
          <div className="flex text-sm md:text-md mt-4 md:mt-16">
            <h3 className="text-dark-yellow font-normal">
              Followers
              <p className="font-bold">10,000</p>
            </h3>
          </div>
        </div>

        <div className="bg-green-200 p-4 rounded-lg shadow-md">
          <div className="grid grid-rows-auto min-content">
            <div className="flex items-center">
              <h2 className="text-lg md:text-xl text-sidebar-text font-normal">Twitter</h2>
            </div>
          </div>
          <div className="flex text-sm md:text-md mt-4 md:mt-16">
            <h3 className="text-dark-yellow font-normal">
              Followers
              <p className="font-bold">50,400</p>
            </h3>
          </div>
        </div>

        <div className="bg-purple-200 p-4 rounded-lg shadow-md">
          <div className="grid grid-rows-auto min-content">
            <div className="flex items-center">
              <h2 className="text-lg md:text-xl text-sidebar-text font-normal">Instagram</h2>
            </div>
          </div>
          <div className="flex text-sm md:text-md mt-4 md:mt-16">
            <h3 className="text-dark-yellow font-normal">
              Followers
              <p className="font-bold">51,412</p>
            </h3>
          </div>
        </div>
      </div>

      <div className="py-4 md:py-8">
        <ActivityChart />
        <LastActivity />
      </div>
    </div>
  );
}

export default Dashboard;
