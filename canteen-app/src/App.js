import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Register from './components/register';
import ViewCustomers from './components/viewCustomers';
import FoodItems from './components/foodItems';
import Login from './components/login';
import Cart from './components/cart';
import NotFound from './components/notFound';
import {Route,Routes,Navigate} from 'react-router-dom';
import UpdateCustomer from './components/updateCustomer';
import Logout from './components/logout';
import UpdateFoodItem from './components/updateFoodItem';
import AddFoodItem from './components/addFoodItem';
import FoodMenu from './components/foodMenu';
import AdminDashboard from './components/adminDashboard';
import NewProfile from './components/newProfile';
import Address from './components/addAddress';
import AddPayment from "./components/addPayment";
import Payments from "./components/payments";
import PaymentTable from "./components/paymentTable";
import UpdatePayment from "./components/UpdatePayment";
import PaymentForm from './components/paymentForm';
import NewPayment from './components/newPayment';
import Card from './components/card';
import OrderForm from './components/OrderForm';

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
        <Route path="/viewCustomers" element={<ViewCustomers />} />
        <Route path="/customer/update/:id" element={<UpdateCustomer />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/new/profile" element={<NewProfile />} />

        <Route path="/foodMenu" element={<FoodMenu />} />
        <Route path="/foodItem/add" element={<AddFoodItem />} />
        <Route path="/foodItem/update/:id" element={<UpdateFoodItem />} />
        <Route path="/adminDashboard/*" element={<AdminDashboard />} />

        <Route path="/payments" element={<Payments />} />
        <Route path="/paymentTable" element={<PaymentTable />} />
        <Route path="/payment/add" element={<AddPayment />} />
        <Route path="/payment/update/:id" element={<UpdatePayment/>} />
        <Route path="paymentForm" element={<PaymentForm />} />
        <Route path="newPayment" element={<NewPayment/>} />
        <Route path="card" element={<Card/>} />
    
        <Route path="/OrderForm" element={<OrderForm/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
