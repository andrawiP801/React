import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="welcome">
        Bienvenido PUTOPTO
      </div>
      <div className="statistics">
        {/* Bloques de estadísticas aquí */}
        <div className="monthly-income">
          Ingresos mensuales: $50000
        </div>
        {/* Repetir para cada bloque de estadísticas */}
      </div>
      {/* Agregar gráficos como barras o líneas según sea necesario */}
      {/* ... */}
    </div>
  );
}

export default Dashboard;
