import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import ProfileActivity from "./components/ProfileActivity";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Overview from './components/Overview';
import Schedule from './components/Schedule';
import Message from './components/Message';
import Saved from './components/Saved';
import Setting from './components/Setting';
import Logout from './components/Logout';
import Analyticsneed from './components/Analyticsneed';

const AppContent = () => {
  const location = useLocation();
  const showDashboardAndProfile = location.pathname === '/' || location.pathname === '/dashboard';

  return (
    <div>
      
      <div className="flex">
      <Sidebar />
        {showDashboardAndProfile && (
          <>
            <Dashboard />
            <ProfileActivity />
          </>
        )}
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/analytics" element={<Analyticsneed />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/message" element={<Message />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
