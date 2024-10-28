import React from 'react';
import EnteredSlider from '../сomponents/Home/EnteredSlider/EnteredSlider';
import HomeTop10 from '../сomponents/Home/HomeTop10/HomeTop10';
import WorldNews from '../сomponents/Home/WorldNews/WorldNews';
import PopularSeries from '../сomponents/Home/PopularSeries/PopularSeries';
import NewCartoon from '../сomponents/Home/NewCartoon/NewCartoon';
import NewMovie from '../сomponents/Home/NewMovie/NewMovie';
const Home = () => {
    return (
        <>
            <EnteredSlider />
            <div className='contentContainer'>
                <HomeTop10 />
                <WorldNews />
                <NewMovie/>
                <NewCartoon />
                <PopularSeries />
            </div>
        </>
    );
};

export default Home;