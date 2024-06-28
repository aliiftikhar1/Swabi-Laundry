import { useState, useEffect } from 'react';

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
            icon: '/herosectionicon/medal (1).png',
            title: '100% Guaranteed',
        },
        {
            icon: '/herosectionicon/credit-card (1).png',
            title: 'Competitive Price',
        },
        {
            icon: '/herosectionicon/microphone (1).png',
            title: 'Customer Care Support',
        },
    ];

    return (
        <section className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12 pt-20 text-white mt-5 lg:mt-20" style={{ backgroundColor: '#0890F1' }}>
            <div className="flex-1 lg:pr-12 order-2 lg:order-1">
                <h1 className="text-4xl lg:text-7xl font-bold px-5 md:px-0 mb-6 text-white">
                    Premium <br />
                    Laundry & dry cleaning
                </h1>
                <div className='bg-opacity-80 flex rounded pr-2 mt-[30px]'>
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                            <div className="flex flex-col w-full items-center text-center text-white">
                                <div className="mb-4">
                                    <img src={feature.icon} alt={feature.title} width={70} height={70} />
                                </div>
                                <div className="text-[10px] md:text-xl font-bold px-2 ">{feature.title}</div>
                            </div>
                            {index < features.length - 1 && (
                                <div className='border-white border-r border-[1px] h-[80px] my-auto opacity-50'></div>
                            )}
                        </div>
                    ))}
                </div>
                
                    <div className="flex flex-col mt-10 ">
                        <a href="https://www.google.com/search?q=Swabi+Laundry+and+Dry+Cleaning+Service&rlz=1C1GCEA_enIN1039IN1039&oq=swabi+laundry&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGD0yBggFEEUYPTIGCAYQRRg80gEIMzUyNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8">
                        <div className="flex flex-row bg-white w-[370px] text-black p-3 text-center justify-center rounded-full">
                            <img src="/google.png" alt="Google" width={80} height={80} className="mr-2" />
                            <span className="text-yellow-500 text-xl md:text-2xl lg:text-2xl">★ ★ ★ ★ ★</span>
                            <div className="row text-lg md:text-xl font-medium px-2 mb-3">{rating && userRatingsTotal && ({rating} )} 4.8/5 stars</div>
                        </div>
                        </a>
                    </div>
               
            </div>
            <div className="flex-1 lg:mt-0 order-1 lg:order-2 py-[20px]">
                <img src="/herosectionicon/swabiherosectionimage.png" alt="Hero Image" className="w-full rounded-xl" height={20} />
            </div>
        </section>
    );
};

export default Hero;
