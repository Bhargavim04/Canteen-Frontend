import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Register from './components/register';
import Address from './components/addAddress';
import ViewCustomers from './components/viewCustomers';
import ViewAddress from './components/viewAddress';
import FoodItems from './components/foodItems';
import Login from './components/login';
import Cart from './components/cart';
import NotFound from './components/notFound';
import {Route,Routes,Navigate} from 'react-router-dom';
import UpdateCustomer from './components/updateCustomer';
import Product from './components/products';
import ProductDetails from './components/productDetails';
import Logout from './components/logout';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/foodItems" element={<FoodItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/address/add" element={<Address />} />
        <Route path="/customers/view" element={<ViewCustomers />} />
        <Route path="/address/view" element={<ViewAddress />} />
        <Route path="/customer/update/:id" element={<UpdateCustomer />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/get/:id" element={<ProductDetails />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
