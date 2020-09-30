import React from 'react';
import Product from './Product'
import '../Home.css';

function Home() {
    return (
        <div className="home">
       <div className="home_container">
           <img className="home_Image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
           alt="" />
           <div className="home_row">
               <Product title="the Lean Startup " 
               price={29.99}
               image='https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg '
               rating={5}/>
                <Product / >
           </div>
           <div className="home_row">
           <Product />
                <Product / >
                <Product />
            
           </div>
           <div className="home_row">
               {/*product*/}
           </div>
       </div>
        </div>
    )
}

export default Home
