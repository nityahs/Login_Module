import React from 'react';

function Welcome({ onLogout }) {
  return (
    <div style={{ textAlign: 'center', marginTop: 60 }}>
      <h1 style={{ color: '#4CAF50' }}>Welcome!</h1>
      <p style={{ fontSize: 18 }}>You have successfully logged in.</p>
      <button onClick={onLogout} style={{ padding: '10px 20px', background: '#f44336', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer' }}>
        Logout
      </button>
    </div>
  );
}

export default Welcome;
