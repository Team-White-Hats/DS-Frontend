import React from 'react'
import { Routes, Route } from 'react-router-dom';
import {Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/header/header';
import Home from '../components/home/home';
import Footer from '../components/footer/footer';
import Login from '../pages/client/login';
import Signup from '../pages/client/signup';
import { ShopContextProvider } from "../context/shop-context";
import { Shop } from '../components/shop/shop';
import { Cart } from '../components/shoppingCart/shoppingCart';
import PaymentForm from '../components/payment/payment';
import ProductAdd from '../pages/admin/productAdd';
import Home2 from '../components/home/home2';
import AdminHeader from '../components/adminComponents/adminheader';
import Sidebar from '../components/adminComponents/adminsidebar';
import AdminLayout from '../components/layout/AdminLayout';
import PaymentAdmin from '../pages/admin/paymentAdmin';
import Delivery from '../components/delivery/delivery'

const Approutes =() =>{
  return (
    <ShopContextProvider>
    <div>
        <Router>
            <Switch>
                <Route path='/client/:path?' exact>
                <Header/>
                                <Switch>
                                <Route path="/client" render={(props) => <Home2/>} exact/>;
                                <Route path="/client/home" render={(props) => <Home/>}/>;
                                <Route path="/client/login" render={(props) => <Login/>} exact/>;
                                <Route path="/client/shop" render={(props) => <Shop/>} exact/>;
                                <Route path="/client/cart" render={(props) => <Cart/>} exact/>;
                                <Route path="/client/signup" render={(props) => <Signup/>} exact/>;
                                <Route path="/client/payment" render={(props) => <PaymentForm/>} exact/>;
                                <Route path="/client/delivery" render={(props) => <Delivery/>} exact/>;
                                
                                
                                </Switch>
                                <Footer/>
                </Route>
  
                <Route path='/admin/:path?' exact>
                <AdminLayout class="wrapper">
                        <AdminHeader/>
                        <Sidebar/>
                        <Switch>
                            <Route path="/admin/addproduct" render={(props) => <ProductAdd/>} exact/>;
                            <Route path="/admin/paymentadmin" render={(props) => <PaymentAdmin/>} exact/>;
                        </Switch>
                    </AdminLayout>
                </Route>
  
  
            </Switch>
        </Router>
    </div>
    </ShopContextProvider>
  );
  

  
}
export default Approutes