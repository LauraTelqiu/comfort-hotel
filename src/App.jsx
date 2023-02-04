import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About.jsx/About";
import Rooms from "./components/Rooms/Rooms";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Rooms />
    </div>
  );
}

export default App;
