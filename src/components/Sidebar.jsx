import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="bg-black text-white md:w-56 lg:w-72 p-4 md:p-6 lg:p-8 pl-8 md:pl-12 lg:pl-16">
      <div className="text-2xl text-center font-bold mb-6">
      <Link to="/dashboard" className="text-white" onClick={() => handleItemClick(null)}>
          Weflox
        </Link>
       
      </div>
      <nav>
        <ul className='text-gray-400'>
          <li className={`mb-6 pt-3 pl-6 p-1 rounded-xl ${selectedItem === 0 ? 'bg-yellow-500 text-white' : 'hover:bg-gray-200 hover:text-yellow-500'}`} onClick={() => handleItemClick(0)}>
            <Link to="/overview" className={`mb-2 ${selectedItem === 0 ? 'text-white' : ''}`}>Overview</Link>
          </li>
          <li className={`flex items-center mb-6 pt-3 pl-6 p-1 rounded-xl ${selectedItem === 1 ? 'bg-yellow-500 text-white' : 'hover:bg-gray-200 hover:text-yellow-500'}`} onClick={() => handleItemClick(1)}>
            <Link to="/analytics" className={`mb-2 ${selectedItem === 1 ? 'text-white' : ''}`}>Analytics</Link>
          </li>
          <li className={`flex items-center mb-6 pt-3 pl-6 p-1 rounded-xl ${selectedItem === 2 ? 'bg-yellow-500 text-white' : 'hover:bg-gray-200 hover:text-yellow-500'}`} onClick={() => handleItemClick(2)}>
            <Link to="/schedule" className={`mb-2 ${selectedItem === 2 ? 'text-white' : ''}`}>Schedule</Link>
          </li>
          <li className={`flex items-center mb-6 pt-3 pl-6 p-1 rounded-xl ${selectedItem === 3 ? 'bg-yellow-500 text-white' : 'hover:bg-gray-200 hover:text-yellow-500'}`} onClick={() => handleItemClick(3)}>
            <Link to="/message" className={`mb-2 ${selectedItem === 3 ? 'text-white' : ''}`}>Message</Link>
          </li>
          <li className={`flex items-center mb-6 pt-3 pl-6 p-1 rounded-xl ${selectedItem === 4 ? 'bg-yellow-500 text-white' : 'hover:bg-gray-200 hover:text-yellow-500'}`} onClick={() => handleItemClick(4)}>
            <Link to="/saved" className={`mb-2 ${selectedItem === 4 ? 'text-white' : ''}`}>Saved</Link>
          </li>
          <li className={`flex items-center mb-6 pt-3 pl-6 p-1 rounded-xl ${selectedItem === 5 ? 'bg-yellow-500 text-white' : 'hover:bg-gray-200 hover:text-yellow-500'}`} onClick={() => handleItemClick(5)}>
            <Link to="/settings" className={`mb-2 ${selectedItem === 5 ? 'text-white' : ''}`}>Settings</Link>
          </li>
          <li className={`flex items-center mb-6 pt-3 pl-6 p-1 rounded-xl mt-40 ${selectedItem === 6 ? 'bg-yellow-500 text-white' : 'hover:bg-gray-200 hover:text-yellow-500'}`} onClick={() => handleItemClick(6)}>
            <Link to="/logout" className={`mb-2 ${selectedItem === 6 ? 'text-white' : ''}`}>Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
