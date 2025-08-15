import React, { useState, useEffect } from 'react';

const SpaceCosmosLanding = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
    container: {
      position: 'relative',
      minHeight: '100vh',
      overflowX: 'hidden',
      backgroundColor: '#111827',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif'
    },
    backgroundFixed: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 0
    },
    dynamicBackground: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.7,
      background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
        rgba(147, 51, 234, 0.3) 0%, 
        rgba(59, 130, 246, 0.2) 25%, 
        rgba(16, 185, 129, 0.1) 50%, 
        transparent 70%)`
    },
    star: {
      position: 'absolute',
      width: '4px',
      height: '4px',
      backgroundColor: '#ffffff',
      borderRadius: '50%',
      animation: 'pulse 2s infinite'
    },
    particle: {
      position: 'absolute',
      width: '8px',
      height: '8px',
      background: 'linear-gradient(to right, #a855f7, #3b82f6)',
      borderRadius: '50%',
      opacity: 0.6,
      animation: 'float 5s infinite linear'
    },
    heroSection: {
      position: 'relative',
      zIndex: 10,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '24px'
    },
    heroContent: {
      maxWidth: '1024px',
      margin: '0 auto',
      transform: `translateY(${scrollY * 0.2}px)`
    },
    heroTitle: {
      fontSize: '96px',
      fontWeight: 'bold',
      lineHeight: '1.1',
      marginBottom: '32px'
    },
    gradientText: {
      background: 'linear-gradient(to right, #a855f7, #ec4899, #3b82f6)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'pulse 2s infinite'
    }
  };

  const keyframes = `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        {/* Animated Background */}
        <div style={styles.backgroundFixed}>
          <div style={styles.dynamicBackground} />
          
          {/* Stars */}
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.star,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.particle,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
                transform: `translateY(${scrollY * 0.5}px)`
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              <span style={styles.gradientText}>YOU ARE CURRENTLY</span>
              <br />
              <span>OFFLINE</span>
            </h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpaceCosmosLanding;