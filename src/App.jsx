import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About.jsx/About";
import Rooms from "./components/Rooms/Rooms";
import Reviews from "./components/Reviews/Reviews";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Rooms />
      <Reviews />
    </div>
  );
}

export default App;
