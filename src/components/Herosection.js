'use client'
import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [rating, setRating] = useState(null);
    const [userRatingsTotal, setUserRatingsTotal] = useState(null);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const response = await fetch('/api/googleRatings');
                const data = await response.json();
                setRating(data.rating);
                setUserRatingsTotal(data.userRatingsTotal);
            } catch (error) {
                console.error('Error fetching Google ratings:', error);
            }
        };

        fetchRatings();
    }, []);

    const features = [
        {
            icon: '/herosectionicon/delivery-truck (1).png',
            title: 'Free Pickup and Delivery',
        },
        {
            icon: '/herosectionicon/courier-services.png',
            title: 'Express Service',
        },
        {
            icon: '/herosectionicon/faitprice.png',
            title: 'Fair Pricing',
        },
        {
            icon: '/herosectionicon/multiplepayment.png',
            title: 'Multiple Payment Channels',
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center px-4 py-8 lg:px-12 text-white mt-5 lg:mt-24" style={{ backgroundColor: '#0890F1' }}>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full">
                <div className="order-2 lg:order-1 mb-8 lg:mb-0 lg:mr-12 lg:w-1/2">
                    <h1 className="text-4xl lg:text-7xl font-bold mb-4">
                        Swabi Laundry
                    </h1>
                    <h2 className="text-2xl lg:text-4xl font-semibold mb-4">
                        Premium Laundry & Dry Cleaning
                    </h2>
                    <p className="text-lg lg:text-2xl text-center mb-6">
                        Clean. Anywhere. Anytime.
                    </p>
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-none lg:flex lg:justify-center">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center mb-4">
                                <img src={feature.icon} alt={feature.title} className="w-12 h-12 lg:w-16 lg:h-16 mr-2" />
                                <span className="text-sm lg:text-base font-semibold">
                                    {feature.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="order-1 lg:order-2 mb-8 lg:mb-0 lg:w-1/2">
                    <img src="/laundryman.png" alt="Hero Image" className="rounded-xl w-full object-cover" />
                </div>
            </div>
            <div className="mt-8">
                <a href="https://www.google.com/search?q=Swabi+Laundry+and+Dry+Cleaning+Service&rlz=1C1GCEA_enIN1039IN1039&oq=swabi+laundry&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGD0yBggFEEUYPTIGCAYQRRg80gEIMzUyNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8">
                    <div className="flex items-center bg-white w-full md:w-[360px] p-3 rounded-full">
                        <img src="/google1.png" alt="Google" width={80} className="mr-2 object-contain" />
                        <span className="text-yellow-500 text-lg lg:text-2xl font-bold">
                            ★ ★ ★ ★ ★
                        </span>
                        <div className="text-lg lg:text-xl font-medium px-2">
                            {rating && userRatingsTotal && `${rating}/5 stars`}
                        </div>
                    </div>
                </a>
                <div className="mt-4 text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                        Ranked #1 by customers
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Hero;
