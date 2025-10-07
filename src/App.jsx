import React from 'react';
import TopNavbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="app d-flex">
      <Sidebar />
      <div className="main flex-grow-1">
        <TopNavbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
