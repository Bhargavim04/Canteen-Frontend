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
import Logout from './components/logout';
import ProfilePage from './components/profilePage';
import Profile from './components/profile';
import UpdateFoodItem from './components/updateFoodItem';
import AddFoodItem from './components/addFoodItem';
import FoodMenu from './components/foodMenu';

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
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cus/profile" element={<Profile />} />

        <Route path="/foodMenu" element={<FoodMenu />} />
        <Route path="/foodItem/add" element={<AddFoodItem />} />
        <Route path="/foodItem/update/:id" element={<UpdateFoodItem />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
