import React from 'react';

export default function Card({ title, value, icon, img }) {
  return (
    <div className="card shadow-sm p-3 mb-3 position-relative">
      {/* Card decoration image */}
      {img && <img src={img} alt="" className="card-decor" />}
      <div className="d-flex align-items-center">
        <div className="me-3">{icon}</div>
        <div>
          <h6 className="mb-0">{title}</h6>
          <h3>{value}</h3>
        </div>
      </div>
    </div>
  );
}
