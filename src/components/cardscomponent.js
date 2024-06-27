import { FaSearch, FaClock, FaCreditCard } from 'react-icons/fa';

export default function CardsComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      <div className="bg-white rounded-lg border-[2px] border-solid hover:shadow-black hover:shadow-md transition-shadow p-6 flex flex-col items-center">
        <div className="bg-gray-200 rounded-full p-3 mb-4">
          <FaSearch className="text-green-500 text-3xl" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-center">No Hidden Cost</h3>
        <p className="text-gray-700 text-center">
          Fair pricing, no surprises! Only pay for the services you use with DipDap - no added fees for bags or delivery.
        </p>
      </div>
      <div className="bg-white rounded-lg border-[2px] border-solid hover:shadow-black hover:shadow-md transition-shadow p-6 flex flex-col items-center">
        <div className="bg-gray-200 rounded-full p-3 mb-4">
          <FaClock className="text-green-500 text-3xl" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-center">Timely Service</h3>
        <p className="text-gray-700 text-center">
          We prioritize your time and guarantee convenient service with our Dapper delivery agent.
        </p>
      </div>
      <div className="bg-white rounded-lg border-[2px] border-solid hover:shadow-black hover:shadow-md transition-shadow p-6 flex flex-col items-center">
        <div className="bg-gray-200 rounded-full p-3 mb-4">
          <FaCreditCard className="text-green-500 text-3xl" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-center">Payment Flexibility</h3>
        <p className="text-gray-700 text-center">
          Pay as you like with DipDap. We accept payments via cash, credit and debit cards.
        </p>
      </div>
    </div>
  );
}
