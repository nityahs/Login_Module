import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      setMessage(res.data.msg);
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Error');
    }
  };

  return (
    <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <h2 style={{ color: '#b39ddb', textAlign: 'center', fontWeight: 700 }}>Register</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <input name="username" placeholder="Username" onChange={handleChange} style={{ boxSizing: 'border-box', width: '100%', padding: 12, borderRadius: 8, border: '1.5px solid #6a1b9a', background: 'rgba(40, 0, 60, 0.25)', color: '#fff', fontSize: 16, outline: 'none', marginBottom: 0 }} />
        <input name="email" placeholder="Email" onChange={handleChange} style={{ boxSizing: 'border-box', width: '100%', padding: 12, borderRadius: 8, border: '1.5px solid #6a1b9a', background: 'rgba(40, 0, 60, 0.25)', color: '#fff', fontSize: 16, outline: 'none', marginBottom: 0 }} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} style={{ boxSizing: 'border-box', width: '100%', padding: 12, borderRadius: 8, border: '1.5px solid #6a1b9a', background: 'rgba(40, 0, 60, 0.25)', color: '#fff', fontSize: 16, outline: 'none', marginBottom: 0 }} />
        <button type="submit" style={{ width: '100%', background: 'linear-gradient(90deg, #7c4dff 0%, #d726ff 100%)', color: '#fff', padding: 14, border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 18, cursor: 'pointer', marginTop: 8, letterSpacing: 1 }}>Register</button>
      </form>
      <p style={{ color: message === 'User registered successfully' ? '#4CAF50' : '#f44336', textAlign: 'center', marginTop: 10 }}>{message}</p>
    </div>
  );
}

export default Register;
