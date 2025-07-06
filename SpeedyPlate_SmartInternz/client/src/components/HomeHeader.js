import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 30px',
      backgroundColor: '#f5ebe0', // Light cream
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    }}>
      <h1 style={{ fontSize: '1.5rem', color: '#8B5E3C' /* Dark brown */ }}>
        🍽️ SpeedyPlate
      </h1>

      <Link to="/cart">
        <button style={{
          backgroundColor: '#a0522d', // Sienna
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
        }}>
          View Cart 🛒
        </button>
      </Link>
    </div>
  );
};

export default HomeHeader;
