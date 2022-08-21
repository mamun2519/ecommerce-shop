import React from 'react';
import Navber from '../Utilitis/Navber';
import Banner from './Banner';
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
                  
            </div>
      );
};

export default Home;