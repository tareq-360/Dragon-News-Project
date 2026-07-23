import Header from '@/components/Header';
import MarqueePage from '@/components/Marquee';
import Navbar from '@/components/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Header></Header>
            <MarqueePage></MarqueePage>
            <Navbar></Navbar>
            {children}
        </>
    );
};

export default MainLayout;