import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaChartLine, FaUsers, FaCog } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="sidebar custom-sidebar p-3">
  <h5>Dashboard</h5>
  <Nav className="flex-column">
    <Nav.Link href="#" className="text-white"><FaHome /> Home</Nav.Link>
    <Nav.Link href="#" className="text-white"><FaChartLine /> Analytics</Nav.Link>
    <Nav.Link href="#" className="text-white"><FaUsers /> Users</Nav.Link>
    <Nav.Link href="#" className="text-white"><FaCog /> Settings</Nav.Link>
  </Nav>
</div>

  );
}
