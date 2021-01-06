import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import NavbarHeader from './components/Navbar';
import LogoHeader from './components/LogoHeader';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartSreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import PropertiesScreen from './screens/PropertiesScreen';
import UploadPropertyScreen from './screens/UploadPropertyScreen';

function App() {
  return (
    <Router>
      <Header />
      <LogoHeader />
      <NavbarHeader />
      <Route path='/' component={HomeScreen} exact />
      <Route path='/properties' component={PropertiesScreen} exact />
      <Route path='/properties:category' component={PropertiesScreen} exact />
      <Route path='/upload-property' component={UploadPropertyScreen} exact />
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/profile' component={ProfileScreen} />
      <Route path='/placeorder' component={PlaceOrderScreen} />
      <Route path='/order/:id' component={OrderScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/payment' component={PaymentScreen} />
      <Route path='/shipping' component={ShippingScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
      <Route path='/admin/userlist' component={UserListScreen} />
      <Route path='/admin/user/:id/edit' component={UserEditScreen} />
      <Route path='/admin/productlist' component={ProductListScreen} exact />
      <Route
        path='/admin/productlist/:pageNumber'
        component={ProductListScreen}
        exact
      />
      <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
      <Route path='/admin/orderlist' component={OrderListScreen} />
      <Footer />
    </Router>
  );
}

export default App;
