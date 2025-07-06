import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#f5ebe0', // Soft cream background
      padding: '1.5rem 2rem',
      borderTop: '1px solid #d3c4b5', // Light brown border
      textAlign: 'center',
      color: '#6b4f3b', // Muted cocoa text
      fontSize: '0.9rem',
      marginTop: '2rem',
    },
    links: {
      marginTop: '0.8rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      flexWrap: 'wrap',
    },
    link: {
      textDecoration: 'none',
      color: '#8b5e3c', // Dark brown links
      fontWeight: '500',
    }
  };

  return (
    <footer style={styles.footer}>
      <div>© {new Date().getFullYear()} SpeedyPlate . All rights reserved.</div>
      <div style={styles.links}>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/terms" style={styles.link}>Terms</Link>
        <Link to="/privacy" style={styles.link}>Privacy</Link>
      </div>
    </footer>
  );
};

export default Footer;
