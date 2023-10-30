import React from 'react';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Reviews from '../Reviews/Reviews';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>B-Deshi Foodie</title>
            </Helmet>
            <Banner></Banner>
            <Catagories></Catagories>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;