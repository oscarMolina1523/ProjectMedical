import React from "react";

const GenerateToken = () => {
  const generateRandomToken = () => {
    const token = Math.random().toString(36).substr(2); // Genera un string aleatorio
    console.log("Generated Token:", token);
  };

  return (
    <div>
      <button onClick={generateRandomToken}>Generate Token</button>
    </div>
  );
};

export default GenerateToken;
