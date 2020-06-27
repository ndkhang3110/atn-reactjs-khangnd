import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'

//page
import HomePage from './page/HomePage'
import LoginRegisterPage from './page/LoginRegisterPage'
import CartPage from './page/CartPage'
import LegoPage from './page/LegoPage'
import SportPage from './page/SportPage'
import ItemPage from './page/ItemPage'
import AddItem from './page/AddItem';
import OrderListPage from './page/OrderListPage';
import AddOrder from './page/AddOrder';
import OrderDetail from './page/OrderDetail'



//component
import NavBar from './component/NavBar'
import Footer from './component/Footer'


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login-register" component={LoginRegisterPage} />
        <Route exact path="/Cart" component={CartPage} />
        <Route exact path="/Lego" component={LegoPage} />
        <Route exact path="/Sport" component={SportPage} />
        <Route exact path="/Item" component={ItemPage} />
        <Route exact path="/AddItem" component={AddItem} />
        <Route exact path="/OrderList" component={OrderListPage} />
        <Route exact path="/AddOrder" component={AddOrder} />
        <Route exact path="/OrderDetail" component={OrderDetail} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
