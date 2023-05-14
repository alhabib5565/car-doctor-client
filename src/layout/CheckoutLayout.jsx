import React from 'react';
import Navbar from '../pages/shared/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';

const CheckoutLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default CheckoutLayout;