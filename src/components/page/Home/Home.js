import React from 'react';
import Footer from '../Utilitis/Footer';
import Navber from '../Utilitis/Navber';
import Banner from './Banner';
import Barnd from './Barnd';
import Busness from './Busness';
import Discount from './Discount';
import Facilitis from './Facilitis';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
      return (
            <div>
                 
                 
                  <Navber/>
                  <Banner/>
                  <Facilitis/>
                  <Discount/>
                 <Products/>
                 <Reviews/>
                 <Busness/>
                 <Barnd/>
                 <Footer/>
                  
            </div>
      );
};

export default Home;