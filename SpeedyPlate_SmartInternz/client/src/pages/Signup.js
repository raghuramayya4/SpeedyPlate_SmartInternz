import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    usertype: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', form);
      alert('Signup successful! Please login.');
      navigate('/login');
    } catch (err) {
      alert('Signup failed. Check console.');
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            style={styles.input}
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="********"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            style={styles.input}
          />

          <label style={styles.label}>Signup as</label>
          <select
            value={form.usertype}
            onChange={(e) => setForm({ ...form, usertype: e.target.value })}
            style={styles.input}
          >
            <option value="user">user</option>
            <option value="restaurant">restaurant</option>
            <option value="admin">admin</option>
          </select>

          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.note}>Already have an account? <a href="/login" style={styles.link}>Login</a></p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#fff8f0', // light cream background
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  card: {
    backgroundColor: '#fffaf5', // soft light brown
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 0 12px rgba(139, 94, 60, 0.1)', // soft brown shadow
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#8b5e3c', // dark warm brown
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


export default Signup;
