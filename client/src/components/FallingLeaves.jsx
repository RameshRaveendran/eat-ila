import React from 'react';

const FallingLeaves = ({ count = 15 }) => {
  // Array of leaf icons/characters (Malayalam 'ഇല' styling & leaf shapes)
  const leafIcons = ['🍃', '🌿', '☘️', '🍂'];

  const leaves = Array.from({ length: count }).map((_, index) => {
    const randomLeaf = leafIcons[Math.floor(Math.random() * leafIcons.length)];
    const leftPos = Math.random() * 100; // Random X-axis start (0-100%)
    const duration = 6 + Math.random() * 8; // Random speed (6s to 14s)
    const delay = Math.random() * 8; // Random start delay (0s to 8s)
    const size = 1.2 + Math.random() * 1.5; // Random scale size

    return (
      <div
        key={index}
        className="falling-leaf"
        style={{
          left: `${leftPos}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          fontSize: `${size}rem`,
        }}
      >
        {randomLeaf}
      </div>
    );
  });

  return <div className="leaf-animation-container">{leaves}</div>;
};

export default FallingLeaves;