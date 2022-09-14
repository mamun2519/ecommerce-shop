import React from 'react';
import Footer from '../Utilitis/Footer';
import PageTitle from '../Utilitis/PageTitle';


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
                 
              <PageTitle title='Home'></PageTitle>
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