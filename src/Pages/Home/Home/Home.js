import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import HomeTools from '../HomeTools/HomeTools';
import Collection from '../Collection/Collection';
import HappyClient from '../HappyClient/HappyClient';
import './Home.css'
import WareHouseSystem from '../WareHouseSystem/WareHouseSystem';
import Review from '../Review/Review';
const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Collection></Collection>
            <HomeTools></HomeTools>
            <HappyClient></HappyClient>
            <Review></Review>
           
        </>
    );
};

export default Home;