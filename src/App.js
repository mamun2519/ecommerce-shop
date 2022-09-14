import logo from './logo.svg';
import './App.css';
import Home from './components/page/Home/Home';
import { Routes , Route} from 'react-router-dom';
import ProductInfo from './components/page/Home/ProductInfo';
import Navber from '../src/components/page/Utilitis/Navber';
import AllProduct from './components/page/Product/AllProduct';
import Login from './components/page/Authontication/Login';
import RequreAuth from './components/page/Authontication/RequreAuth';
import Cart from './components/page/Cart/Cart';
import ChackOut from './components/page/Cart/ChackOut';
import OrderReview from './components/page/Cart/OrderReview';
import Payment from './components/page/Cart/Payment';
import PaymentSuccess from './components/page/Cart/PaymentSuccess';
import Dashboard from './components/page/Dashboard/Dashboard'
import ShowMessage from './components/page/Dashboard/ShowMessage';
import Myorder from './components/page/Dashboard/Myorder';
import OrderReceipt from './components/page/Dashboard/OrderReceipt';
import UpdateProfile from './components/page/Dashboard/UpdateProfile';
import MyProfile from './components/page/Dashboard/MyProfile';
import { ToastContainer } from 'react-toastify';
import Chat from './components/page/Dashboard/Chat';
import Review from '../src/components/page/Dashboard/Review'
import ManageOrder from './components/page/Dashboard/ManageOrder';
import OrderShipped from './components/page/Dashboard/OrderShipped'
import User from './components/page/Dashboard/User';
import ManageProduct from './components/page/Dashboard/ManageProduct';
import AddProduct from './components/page/Dashboard/AddProduct';
import RequreAdmin from './components/page/Authontication/RequreAdmin';
import ProductReadMore from './components/page/Dashboard/ProductReadMore';
import CustomerService from './components/page/Utilitis/CustomerService';
function App() {
  
  return (
    <div className="bg">
       <Navber/>
            <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/customerService' element={<CustomerService/>}/>
        <Route path='/chackout' element={<ChackOut/>}/>
       <Route path='/dashboard' element={
        <RequreAuth>
          <Dashboard/>
        </RequreAuth>
       }>
       {/* <Route  index element={<ShowMessage/>}></Route> */}
       <Route index element={<Myorder/>}></Route>
       <Route  path='/dashboard/updateProfile' element={
         <RequreAuth>
               <UpdateProfile/>
         </RequreAuth>
      }></Route>
       <Route  path='/dashboard/myProfile' element={
       <RequreAuth>
        <MyProfile/>
       </RequreAuth>
       }></Route>
       <Route  path='/dashboard/help-center' element={
         <RequreAuth>
          <Chat/>
         </RequreAuth>
       
       }></Route>
       <Route  path='/dashboard/review' element={
          <RequreAuth>
          <Review/>
          </RequreAuth>
        
       }></Route>
       <Route  path='/dashboard/manageOrder' element={
        <RequreAuth>
        <RequreAdmin>
        <ManageOrder/>
        </RequreAdmin>
        </RequreAuth>
      }></Route>
       <Route  path='/dashboard/user' element={

        <RequreAuth>
        <RequreAdmin>
        <User/>
        </RequreAdmin>
        </RequreAuth>
       }></Route>
       <Route  path='/dashboard/product/readMore/:id' element={

        <RequreAuth>
        <RequreAdmin>
        <ProductReadMore/>
        </RequreAdmin>
        </RequreAuth>
       }></Route>
       <Route  path='/dashboard/manageProduct' element={
        <RequreAuth>
        <RequreAdmin>
        <ManageProduct/>
        </RequreAdmin>
        </RequreAuth>
       
       }></Route>
       <Route  path='/dashboard/productAdd' element={
        <RequreAuth>
        <RequreAdmin>
        <AddProduct/>
        </RequreAdmin>
        </RequreAuth>
       
       
       }></Route>
       <Route  path='/dashboard/manageOrder/OrderShipped/:id' element={<OrderShipped/>}></Route>
       <Route path='/dashboard/myorders/orderReceipt/:id' element={<OrderReceipt/>}></Route>
       </Route>
        
        <Route path='/chackout/orderReview' element={<OrderReview/>}/>
        <Route path='/chackout/orderReview/payment' element={<Payment/>}/>
        <Route path='/chackout/orderReview/payment/success' element={<PaymentSuccess/>}/>
        <Route path='/view/all/product' element={<RequreAuth>
          <AllProduct/>
        </RequreAuth>}/>
        <Route path='/productInfo/:id' element={<RequreAuth>
          <ProductInfo/>
        </RequreAuth>}/>
        <Route path='/login' element={<Login/>}/>

       
      </Routes>
      <ToastContainer ></ToastContainer>
  
    </div>
  );
}

export default App;
