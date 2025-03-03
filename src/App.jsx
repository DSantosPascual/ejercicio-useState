import React, { useState } from 'react';

const App = () => {
  const [nombre, setNombre] = useState("Sofía");
  const [nuevoNombre, setNuevoNombre] = useState('');

  const manejarClic = () => {
    if (nuevoNombre.trim() !== '') {
      setNombre(nuevoNombre);
      setNuevoNombre('');
    }
  };

  return (
    <div>
      <h2>Nombre del Profesor: {nombre}</h2>
      <div>
        <input
          type="text"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          placeholder="Ingresa un nombre"
        />
        <button onClick={manejarClic}>Actualizar</button>
      </div>
    </div>
  );
};

export default App;