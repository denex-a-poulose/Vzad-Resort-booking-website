import React from 'react'
import '../index.css';
import Header from './Header';

import spa from '../assets/icons/spa.png'
import pool from '../assets/icons/pool.png'
import cup from '../assets/icons/cup.png'
import dice from '../assets/icons/dice.png'
const ResortPage = () => {

    const facilities = [

        { icon: spa, title: "Spa", description: "Massages, facials, aromatherapy, hydrotherapy." },
        { icon: pool, title: "Swimming Pools", description: "Infinity pools, kids’ pools, heated pools." },
        { icon: cup, title: "Bars & Cafes", description: "Poolside bar, beachside bar, specialty coffee shops" },
        { icon: dice, title: "Family Entertainment", description: "Movie nights, arcade games, board games." },
    ]


    return (
        <div className="mesh-gradient-bg min-h-screen flex flex-col">
            <Header />
            <div className="container mx-auto pt-[120px] px-4 md:px-16 flex-1">
                {/* Title */}
                <div className="flex items-center">

                    <h3 className="text-primary-light  text-3xl font-normal">
                        Find Your <span className="text-secondary-light">Perfect</span> Stay
                    </h3>
                </div>
                <p className="text-primary-light text-[16px] py-6">
                    Experience luxury with rooms designed for relaxation or adventure, offering premium amenities and stunning
                    views for an unforgettable stay.
                </p>

                {/* Facilities */}
                <div className="flex items-center mt-14">

                    <h3 className="text-primary-light text-2xl font-normal">Facilities</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 px-6 md:mt-20">
                    {facilities.map((facility, index) => (
                        <div className=' my-[40px] flex flex-col items-center' key={index}>
                            <div className='flex items-center flex-col md:flex-row'>
                                <img src={facility.icon} alt={facility.title} className="w-6 h-6 my-4 m-2" />
                                <h4 className="text-[22px] font-[600] text-primary-light m-2 text-center">{facility.title}</h4>
                            </div>

                            <p className="text-[16px] text-primary-light mt-2 text-center">{facility.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default ResortPage