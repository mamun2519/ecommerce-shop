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
function App() {
  return (
    <div className="">
       <Navber/>
            <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/chackout' element={<ChackOut/>}/>
       <Route path='/dashboard' element={<Dashboard></Dashboard>}>
       <Route  index element={<ShowMessage/>}></Route>
       <Route  path='/dashboard/myorders' element={<Myorder/>}></Route>
       <Route  path='/dashboard/updateProfile' element={<UpdateProfile/>}></Route>
       <Route  path='/dashboard/myProfile' element={<MyProfile/>}></Route>
       <Route  path='/dashboard/help-center' element={<Chat/>}></Route>
       <Route  path='/dashboard/review' element={<Review/>}></Route>
       <Route  path='/dashboard/manageOrder' element={<ManageOrder/>}></Route>
       <Route  path='/dashboard/user' element={<User/>}></Route>
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
