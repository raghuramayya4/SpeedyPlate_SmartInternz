import React from 'react';
import { useUser } from '../context/UserContext';

const HeroSection = () => {
  const { user } = useUser();

  const styles = {
    section: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 1rem',
      minHeight: '60vh',
      backgroundColor: '#f5ebe0', // Soft cream background
      borderBottom: '1px solid #d6ccc2',
      gap: '1.5rem',
    },
    textContainer: {
      flex: 1,
      minWidth: '280px',
      paddingRight: '1rem',
      paddingLeft: '1.2rem',
    },
    heading: {
      fontSize: '3.5rem',
      color: '#8B5E3C', // Dark brown
      marginBottom: '1rem',
    },
    paragraph: {
      fontSize: '1.1rem',
      marginBottom: '1.2rem',
      color: '#5d4037', // Coffee brown
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#a0522d', // Sienna
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '0.95rem',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    },
    imageContainer: {
      flex: 1,
      minWidth: '260px',
      textAlign: 'center',
      marginTop: '0.8rem',
    },
    image: {
      maxWidth: '90%',
      maxHeight: '300px',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Welcome, {user?.name || ''}</h1>
        <p style={styles.paragraph}>
          <i>
            Craving something delicious? Explore various cuisines and restaurants or simply order today's menu
            based on your diet plan.
          </i>
        </p>
        <button
          style={styles.button}
          onClick={() => {
            const sampleCart = [
              {
                _id: '111',
                foodItemName: 'Grilled Chicken Salad',
                price: 120,
                quantity: 1,
                restaurantId: 'R001',
                restaurantName: 'FitBites',
                foodItemImg: '/assets/salad.jpg',
                foodItemId: 'F001',
                discount: 0,
              },
              {
                _id: '112',
                foodItemName: 'Quinoa Veg Bowl',
                price: 150,
                quantity: 1,
                restaurantId: 'R002',
                restaurantName: 'GreenKitchen',
                foodItemImg: '/assets/quinoa.jpg',
                foodItemId: 'F002',
                discount: 10,
              },
            ];

            localStorage.setItem('cart', JSON.stringify(sampleCart));
            window.location.href = '/cart';
          }}
        >
          🍽️ Order Today's Menu
        </button>
      </div>

      <div style={styles.imageContainer}>
        <img
          src="/assets/welcome-illustration.jpeg"
          alt="Welcome to QuickBite"
          style={styles.image}
        />
      </div>
    </section>
  );
};

export default HeroSection;
