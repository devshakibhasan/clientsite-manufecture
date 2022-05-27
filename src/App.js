import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Blogs/Blogs';

import ManageTools from './Pages/ManageTools/ManageTools';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
// import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

import AddItem from './Pages/AddItem/AddItem';
import { ToastContainer } from 'react-bootstrap';
import Order from './Pages/Order/Order';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import './loader';
import DashBoard from './Pages/DashBoard/DashBoard';

import MyReview from './Pages/DashBoard/MyReview/MyReview';
import MyItemShow from './Pages/DashBoard/MyOrderShow/MyItemShow';
import MyItem from './Pages/DashBoard/MyItem/MyItem';
import MyOrder from './Pages/MyOrders/MyOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddReview from './Pages/AddReview/AddReview';
import Users from './Pages/DashBoard/User/User';
import AddProduct from './Pages/AddProducts/AddProducts';

function App() {
  return (
    <div className='app'>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>


        <Route path="dashboard" element={<RequireAuth><DashBoard /></RequireAuth>} >
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="myPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="managetools" element={<ManageTools></ManageTools>}></Route>
        </Route>
        {/* 
        <Route path='/myPortfolio' element={
          <RequireAuth>
            <MyPortfolio></MyPortfolio>
          </RequireAuth>
        }>
        </Route> */}

        <Route path='/purchase/:productId' element={
          <RequireAuth>
            <PurchasePage></PurchasePage>
          </RequireAuth>
        }>
        </Route>
        <Route path="/Blogs" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout/:productId" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>

        <Route path="/addreview" element={
          <RequireAuth>
            <AddReview></AddReview>
          </RequireAuth>
        }></Route>
        <Route path="/addtools" element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>

       
        <Route path="/orders" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
