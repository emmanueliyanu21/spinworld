import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import NavbarHeader from "./components/Navbar";
import LogoHeader from "./components/LogoHeader";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartSreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

function App() {
  return (
    <Router>
      <Header />
      <LogoHeader />
      <NavbarHeader />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/placeorder" component={PlaceOrderScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/payment" component={PaymentScreen} />
      <Route path="/shipping" component={ShippingScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Footer />
    </Router>
  );
}

export default App;
