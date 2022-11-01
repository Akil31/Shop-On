import { BrowserRouter7,Route, Router, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Component/Product';
import Cart from './Component/Cart';
import {CartProvider} from 'react-use-cart'

function App() {
  return (
  <div>        

<CartProvider>
<Product/>
<Cart/>
</CartProvider>

  </div>




  );
}

export default App;
