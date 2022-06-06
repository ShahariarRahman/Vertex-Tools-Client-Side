import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Pages/Dashboard/Payment';
import NotFound from './Pages/Shared/NotFound';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireCustomer from './Pages/Login/RequireCustomer';

function App() {
  const [displayName, setDisplayName] = useState('');
  return (
    <div>
      <Header displayName={displayName}></Header>
      <div className='max-w-screen-2xl min-h-screen mx-auto z-1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myPortfolio" element={<MyPortfolio />} />
          <Route path="/signup" element={<SignUp setDisplayName={setDisplayName} />} />

          <Route path="/purchase/:id" element={<RequireAuth><RequireCustomer><Purchase /></RequireCustomer></RequireAuth>} />

          <Route path="dashboard" element={<RequireAuth> <Dashboard /> </RequireAuth>}>

            <Route path="myprofile" element={<MyProfile />}></Route>

            <Route path="addReview" element={<RequireCustomer><AddReview /></RequireCustomer>}></Route>
            <Route path="myOrders" element={<RequireCustomer><MyOrders /></RequireCustomer>}></Route>
            <Route path="payment/:id" element={<RequireCustomer><Payment /></RequireCustomer>}></Route>

            <Route path="addProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
            <Route path="makeAdmin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
            <Route path="manageOrders" element={<RequireAdmin><ManageOrders /></RequireAdmin>}></Route>
            <Route path="manageProducts" element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
