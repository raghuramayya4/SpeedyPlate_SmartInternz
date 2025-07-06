import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      const userData = res.data.user;
       console.log('Logged in userData:', userData);

       console.log("Full response from backend:", res.data);
       console.log("Extracted userData:", res.data.user);


      login(userData);
      alert('Login successful!');

      // Redirect based on user type
      if (userData.usertype === 'admin') {
        navigate('/admin/dashboard');
      } else if (userData.usertype === 'restaurant') {
        navigate('/restaurant/dashboard');
      } else {
        navigate('/');
      }
    } catch (err) {
      alert('Login failed. Please check credentials');
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            style={styles.input}
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.note}>
          New to SpeedyPlate? <a href="/signup" style={styles.link}>Create an account</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#fff8f0', // warm cream
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  card: {
    backgroundColor: '#fffaf5', // soft white
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 0 12px rgba(139, 94, 60, 0.1)', // subtle brown shadow
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#8b5e3c', // warm dark brown
    fontSize: '1.7rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    color: '#5e3e2e',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #c8b7a6', // beige border
    fontSize: '1rem',
    backgroundColor: '#fffdfb',
  },
  button: {
    backgroundColor: '#8b5e3c',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  note: {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#7a6653',
  },
  link: {
    color: '#b7793d', // warm brown-orange
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};


export default Login;
