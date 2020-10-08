import React from "react";
import Header from "./components/Header";
import NavbarHeader from "./components/Navbar";
import LogoHeader from "./components/LogoHeader";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <LogoHeader />
      <NavbarHeader />
      <HomeScreen />
      <Footer />
    </div>
  );
}

export default App;
