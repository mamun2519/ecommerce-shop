import React from 'react';
import Navber from '../Utilitis/Navber';
import Banner from './Banner';
import Discount from './Discount';
import Facilitis from './Facilitis';
import Products from './Products';

const Home = () => {
      return (
            <div>
                 
                 
                  <Navber/>
                  <Banner/>
                  <Facilitis/>
                  <Discount/>
                 <Products/>
                  
            </div>
      );
};

export default Home;