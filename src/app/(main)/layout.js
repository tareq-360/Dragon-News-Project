import dns from "node:dns";
dns.setServers["8.8.8.8" , "8.8.4.4"]

import Header from '@/components/Header';
import MarqueePage from '@/components/Marquee';
import Navbar from '@/components/Navbar';
import React from 'react';


const MainLayout = ({children}) => {
    return (
        <main className=" container mx-auto px-5 sm:px-1">
            <Header></Header>
            <MarqueePage></MarqueePage>
            <Navbar></Navbar>
            {children}
        </main>
    );
};

export default MainLayout;