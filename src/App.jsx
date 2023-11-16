import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="App-body"> {/* Contenedor agregado */}
        <Header />
      </div>
    </div>
  );
}

export default App;
