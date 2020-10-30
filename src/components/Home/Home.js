import React from 'react';
import MyCarousels from '../carousels/MyCarousels';
import MyTitle from '../MyTitle/MyTitle';
import Mynavbar from '../Navbar/Mynavbar';

const Home = () => {
    return (
        <div>
            <Mynavbar></Mynavbar>
            <MyCarousels></MyCarousels>
            <MyTitle></MyTitle>
        </div>
    );
};

export default Home;