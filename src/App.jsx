import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders"
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./redux/userRedux";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import OrderConfirmation from "./pages/OrderConfirmation";

const App = () => {
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={user ? <Cart /> : <Navigate to='/login' />} />
        <Route path='/orderconfirmation' element={<OrderConfirmation />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />

        <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} />
      </Routes>
    </Router>
  )

};

export default App;