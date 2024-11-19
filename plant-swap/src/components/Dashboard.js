import React from 'react';

const Dashboard = ({ user }) => {
  if (!user) {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>Please log in to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <img 
        src={user.avatar} 
        alt={`${user.username}'s avatar`} 
        style={{ width: '100px', borderRadius: '50%' }} 
      />
      <p>Plants listed in your area:</p>
    </div>
  );
};

export default Dashboard;
