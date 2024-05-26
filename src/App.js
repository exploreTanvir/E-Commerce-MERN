import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/Home";
import Plist from './pages/Plist';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import ProductL from './pages/productList/ProductL';
import Register from './pages/register/Register';

const App = () => {
 const user=false
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <Plist />
        </Route>
        <Route path="/products">
          <ProductL />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          {user?<Redirect to="/" />:<Login/>}
        </Route>
        <Route path="/register">
        {user?<Redirect to="/" />:<Register/>}

        </Route>
        <Route path="/plist">
        <Plist/>

        </Route>
        <Route path="/plist">
        <Plist/>
        </Route>
        
      </Switch>
    </Router>
  );
};

export default App;