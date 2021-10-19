import React from 'react';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import DynamicText from '../components/DynamicText';
import ButtonsBottom from '../components/ButtonsBottom';
import Mouse from '../components/Mouse';

const Home = () => {
    return (
        <main>
            <div className="home">
            <Mouse />
            <Navigation />
            <SocialNetwork />
            <div className="home-main">
                <div className="main-content">
                    <h1> JB AGENCY</h1>
                    <h2><DynamicText /></h2>
                </div>
            </div>
            <ButtonsBottom right={"/project-1"} />
            </div>
        </main>
    );
};

export default Home;