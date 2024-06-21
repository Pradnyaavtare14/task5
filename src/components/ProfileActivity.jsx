const ProfileActivity = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Profile Progress</h2>
        
        <div className="flex justify-center items-center mb-4">
          <div className="w-24 h-24 bg-light-green rounded-full"></div>
        </div>
        
        <div className="flex  mb-4 mr-2">
          <div className="w-16 h-16 bg-light-green rounded-full "></div>
          <div>
            <h2 className="text-xl font-bold">VladimirZelenski</h2>
            <p className="text-gray-600">@Vladimir_Zel</p>
          </div>
        </div>
  
        <div className="flex flex-col sm:flex-row justify-around mb-4">
          <div className="text-center mb-4 sm:mb-0">
            <h3 className="text-lg font-bold">12</h3>
            <p className="text-gray-600">Post</p>
          </div>
          <div className="text-center mb-4 sm:mb-0">
            <h3 className="text-lg font-bold">40k</h3>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold">11</h3>
            <p className="text-gray-600">Following</p>
          </div>
        </div>
        
        <div className="flex justify-center mb-4">
          <button className=" border text-black px-4 py-2 rounded-lg mt-10">View Statistic</button>
        </div>
        
        <div className="bg-black p-4 rounded-lg h-52 mt-12">
          <p className="text-white text-center font-bold text-lg mt-16">Upgrade</p>
          <p className="text-white text-center">Upgrade now for get <br />benefits more.</p>
          <button className=" flex ml-12 mt-2 bg-white text-center rounded-sm items-center justify-center">Upgrade Plan</button>
        </div>
      </div>
    );
  };
  
  export default ProfileActivity;
  