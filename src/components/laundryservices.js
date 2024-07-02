// components/LaundryServices.js
const services = [
    { name: 'Dry cleaning', icon: '/icons/wardrobe.png' },
    { name: 'Daily Wear', icon: '/icons/shirt.png' },
    { name: 'Wash & fold', icon: '/icons/clean-clothes.png' },
    { name: 'Household items', icon: '/icons/speaker.png' },
    { name: 'Wedding Dresses', icon: '/icons/wedding.png' },
    { name: 'Outerwear', icon: '/icons/jacket.png' },
    { name: 'Alterations', icon: '/icons/sewing-machine.png' },
    { name: 'Shoes', icon: '/icons/shoes.png' },
  ];
  
  const LaundryServices = () => {
    return (
      <div className="text-center py-5 bg-white text-black px-10">
        <h1 className="text-xl mb-6 font-semibold">What service do you choose today?</h1>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mx-auto ">
          {services.map((service) => (
            <a href="https://wa.me/971589920080" target="_blank" >
            <div
              key={service.name}
              className="flex flex-col items-center h-full pb-5\ bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 "
            >
              <img src={service.icon} alt={service.name} className="h-14 mb-2" />
              <p className="font-medium">{service.name}</p>
            </div>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default LaundryServices;
  