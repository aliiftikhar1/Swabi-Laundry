// components/LaundryServices.js
const services = [
    { name: 'Dry cleaning', icon: '/icons/wardrobe.png' },
    { name: 'Shirt Laundry', icon: '/icons/shirt.png' },
    { name: 'Wash & fold laundry', icon: '/icons/clean-clothes.png' },
    { name: 'Household items', icon: '/icons/speaker.png' },
    { name: 'Wedding Dresses', icon: '/icons/wedding.png' },
    { name: 'Outerwear', icon: '/icons/jacket.png' },
    { name: 'Alterations', icon: '/icons/sewing-machine.png' },
    { name: 'Shoes', icon: '/icons/shoes.png' },
  ];
  
  const LaundryServices = () => {
    return (
      <div className="text-center py-10 bg-white text-black">
        <h1 className="text-3xl mb-6">Laundry and dry cleaning services that suit you</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-6xl mx-auto px-5 md:px-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col items-center p-5 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200"
            >
              <img src={service.icon} alt={service.name} className="h-14 mb-2" />
              <p className="font-medium">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LaundryServices;
  