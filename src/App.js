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
 const user=true
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products/:category">
          <Plist />
        </Route>
        <Route exact path="/product/:id">
          <ProductL />
        </Route>
        <Route exact path="/carts">
          <Cart />
        </Route>
        <Route exact path="/login">
          {user?<Redirect to="/" />:<Login/>}
        </Route>
        <Route exact path="/register">
        {user?<Redirect to="/" />:<Register/>}

        </Route>
        
      </Switch>
    </Router>
  );
};

export default App;