import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertIMG from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

import useMenu from '../../Hooks/useMenu';
import SectonTitle from '../../Components/SectonTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    console.log(offered)
    return (
        <div>
            <Helmet>
                <title>B-Deshi | | Menu</title>
            </Helmet>
            {/* main cover */}

            <Cover img={menuImg} title='Our Menu'></Cover>

            {/* offered items */}
            <SectonTitle subHeading="Don't Miss" heading="Today's offer"></SectonTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert items */}
            <MenuCategory items={dessert} title='desserts' coverImg={dessertIMG}></MenuCategory>

            {/* pizza items */}
            <MenuCategory items={pizza} title='pizza' coverImg={pizzaImg}></MenuCategory>

            {/* Soup items */}

            <MenuCategory items={soup} title='soup' coverImg={soupImg}></MenuCategory>

            {/* salad items */}

            <MenuCategory items={salad} title='salad' coverImg={saladImg}></MenuCategory>








        </div>
    );
};

export default Menu;