import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import Welcome from './Welcome';

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  if (isLoggedIn) return <Welcome onLogout={handleLogout} />;

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #1a0033 0%, #3a0066 50%, #000 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'auto',
    }}>
      <div style={{
        maxWidth: 400,
        width: '100%',
        padding: 30,
        borderRadius: 24,
        background: 'rgba(255,255,255,0.12)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.18)',
        margin: '40px 0',
      }}>
        <h1 style={{ textAlign: 'center', color: '#fff', marginBottom: 30, letterSpacing: 2, textShadow: '0 2px 8px #000' }}>Login Module</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <button
            onClick={() => setShowRegister(false)}
            style={{
              background: !showRegister ? '#8f5cff' : '#e0e0e0',
              color: !showRegister ? '#fff' : '#333',
              border: 'none',
              borderRadius: '20px 0 0 20px',
              padding: '10px 30px',
              cursor: 'pointer',
              fontWeight: 'bold',
              outline: 'none',
              transition: 'background 0.2s',
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => setShowRegister(true)}
            style={{
              background: showRegister ? '#d726ff' : '#e0e0e0',
              color: showRegister ? '#fff' : '#333',
              border: 'none',
              borderRadius: '0 20px 20px 0',
              padding: '10px 30px',
              cursor: 'pointer',
              fontWeight: 'bold',
              outline: 'none',
              transition: 'background 0.2s',
            }}
          >
            Register
          </button>
        </div>
        {showRegister ? (
          <Register />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </div>
  );
}

export default App;
