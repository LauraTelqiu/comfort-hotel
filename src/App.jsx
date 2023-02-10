import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Rooms from "./components/Rooms/Rooms";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Rooms />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
