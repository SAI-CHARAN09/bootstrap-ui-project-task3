import React from 'react';
import Card from '../components/Card';
import UserTable from '../components/UserTable';
import { FaUsers, FaShoppingCart, FaEye } from 'react-icons/fa';

export default function Dashboard() {
  // Hardcoded stats
  const stats = {
    visitors: 1200,
    sales: 350,
    orders: 80
  };

  // Hardcoded users
  const users = [
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Sara Smith', role: 'Editor' },
    { id: 3, name: 'Alex Johnson', role: 'Viewer' }
  ];

  return (
    <div
      className="dashboard p-4"
      style={{
        background: "url('/images/bg-dashboard.jpg') no-repeat center center",
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}
    >
      {/* Cards */}
      <div className="d-flex gap-3 mb-4">
        <Card
          title="Visitors"
          value={stats.visitors}
          icon={<FaEye />}
          img="/images/card-visitors.jpg"
        />
        <Card
          title="Sales"
          value={stats.sales}
          icon={<FaShoppingCart />}
          img="/images/card-sales.jpg"
        />
        <Card
          title="Orders"
          value={stats.orders}
          icon={<FaUsers />}
          img="/images/card-orders.jpg"
        />
      </div>

      {/* Users Table */}
      <div className="card p-3 shadow-sm users-card">
        <h5>Users</h5>
        <UserTable users={users} />
      </div>
    </div>
  );
}
