import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const isLoggedIn = !!user;

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>SpeedyPlate 🍔</Link>
      </div>

      {isMobile ? (
        <>
          <div onClick={() => setMenuOpen(!menuOpen)} style={styles.burger}>☰</div>
          {menuOpen && (
            <div style={styles.mobileMenu}>
              <input
                type="text"
                placeholder="Search food or restaurants..."
                style={styles.searchInput}
              />

              <Link to="/menu" style={styles.link}>Menu</Link>
              {isLoggedIn ? (
                <>
                  <Link to="/profile" style={{ ...styles.link, color: '#8B5E3C' }}>
                    👤 {user.name}
                  </Link>
                  <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" style={styles.link}>Login</Link>
                  <Link to="/signup" style={styles.link}>Signup</Link>
                </>
              )}
              <Link to="/cart" style={styles.link}>🛒</Link>
            </div>
          )}
        </>
      ) : (
        <div style={styles.right}>
          <input
            type="text"
            placeholder="Search food or restaurants..."
            style={styles.searchInput}
          />

          <Link to="/menu" style={styles.link}>Menu</Link>
          {isLoggedIn ? (
            <>
              <Link to="/profile" style={{ ...styles.link, color: '#8B5E3C' }}>
                👤 {user.name}
              </Link>
              <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.link}>Login</Link>
              <Link to="/signup" style={styles.link}>Signup</Link>
            </>
          )}
          <Link to="/cart" style={styles.cart}>🛒</Link>
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#f5ebe0', // soft cream background
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #d6ccc2',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    flexWrap: 'wrap',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.7rem',
    fontWeight: 'bold',
    color: '#8B5E3C', // dark brown
    textDecoration: 'none',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    flexWrap: 'wrap',
  },
  searchInput: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '2px solid #d6ccc2',
    fontSize: '1rem',
    maxWidth: '220px',
    backgroundColor: '#fffaf1',
    color: '#4e342e',
  },
  link: {
    color: '#5d4037',
    textDecoration: 'none',
    fontWeight: '650',
    fontSize: '18px',
  },
  logoutBtn: {
    background: 'transparent',
    border: 'none',
    color: '#a0522d', // sienna
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
  },
  cart: {
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: '#5d4037',
  },
  burger: {
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#5d4037',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '10px',
    marginTop: '10px',
  },
};

export default Navbar;
