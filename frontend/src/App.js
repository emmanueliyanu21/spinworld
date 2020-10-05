import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <h2>Welcome to Spinworld</h2>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
