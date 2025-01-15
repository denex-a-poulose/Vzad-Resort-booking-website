import React from 'react';
import homeImage from '../assets/images/home.png';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
        <div
            className="h-screen flex flex-col bg-cover bg-center"
            style={{
                backgroundImage: `url(${homeImage})`,
            }}
        >
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex-grow flex flex-col container mx-auto justify-center text-white px-6 md:px-12 lg:px-20 text-left">
                <div>
                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight">
                        Experience <span className="text-[#85A98F]">Luxury</span> Like <br />
                        Never Before
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm md:text-lg lg:text-xl text-primary-light mb-6">
                        Escape to luxury resorts, where comfort, adventure, <br className="hidden md:block" />
                        and relaxation await you.
                    </p>

                    {/* Button */}
                    <Link to="/resorts">
                        <button className="bg-[#85A98F] opacity-90 px-6 py-3 text-primary-light text-sm md:text-md rounded-full hover:bg-[#8fbca2] transition duration-200">
                            Explore
                        </button>
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
