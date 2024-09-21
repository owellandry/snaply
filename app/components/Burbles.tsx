"use client";

import React from 'react';

const colors = ['#F7446F', '#34D89F', '#FEDD58', '#1C89B1'];

const bubbles = [
  { top: '10%', left: '85%', size: '300px', color: colors[0] },
  { top: '20%', left: '35%', size: '100px', color: colors[1] },
  { top: '50%', left: '20%', size: '90px', color: colors[2] },
  { top: '80%', left: '75%', size: '50px', color: colors[3] },
  { top: '10%', left: '10%', size: '60px', color: colors[0] },
  { top: '85%', left: '-10%', size: '210px', color: colors[1] },
  { top: '60%', left: '70%', size: '95px', color: colors[2] },
  { top: '40%', left: '50%', size: '85px', color: colors[3] },
];

// Función para generar un retraso aleatorio para cada burbuja
const getRandomDelay = () => {
  return `${Math.random() * 5}s`; // Retardo entre 0s y 5s
};

const Burbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute rounded-full animate-twinkle"
          style={{
            backgroundColor: bubble.color,
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: bubble.left,
            opacity: Math.random() * 0.7 + 0.3,
            filter: 'blur(150px)',
            animationDelay: getRandomDelay(),
          }}
        />
      ))}
      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 2;
          }
          100% {
            opacity: 0.3;
          }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Burbles;
