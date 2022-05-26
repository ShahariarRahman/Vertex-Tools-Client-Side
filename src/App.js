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

function App() {
  const [displayName, setDisplayName] = useState('');
  return (
    <div>
      <Header displayName={displayName}></Header>
      <div className='max-w-screen-2xl min-h-screen  mx-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myPortfolio" element={<MyPortfolio />} />
          <Route path="/signup" element={<SignUp setDisplayName={setDisplayName} />} />
          <Route path="/purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>} />

          <Route path="dashboard" element={<RequireAuth> <Dashboard /> </RequireAuth>}>
            <Route path="myprofile" element={<MyProfile />}></Route>
            <Route path="manageOrders" element={<ManageOrders />}></Route>
            <Route path="addProduct" element={<AddProduct />}></Route>
            <Route path="makeAdmin" element={<MakeAdmin />}></Route>
            <Route path="manageProducts" element={<ManageProducts />}></Route>
            <Route path="addReview" element={<AddReview />}></Route>
            <Route path="myOrders" element={<MyOrders />}></Route>
            <Route path="payment/:id" element={<Payment />}></Route>
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
