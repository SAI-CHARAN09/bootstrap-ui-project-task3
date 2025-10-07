import React from 'react';

export default function UserTable({ users }) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>
              <img
                src={`/avatars/user${user.id}.jpg`}
                className="avatar"
                alt={user.name}
              />
            </td>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
