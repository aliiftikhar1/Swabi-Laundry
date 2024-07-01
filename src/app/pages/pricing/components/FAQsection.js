'use client'
import React, { useState } from 'react';

const faqData = [
  {
    question: "Do you have a minimum charge?",
    answer: "Yes, we do. The minimum invoice charged to the customer is AED 50. However, we do process orders below this amount. In such cases (where the order value is less than 50 AED) the customer is charged with the minimum invoice value."
  },
  {
    question: "Do you have any delivery fees?",
    answer: "No. DipDap not only has ZERO delivery fees but also has no other hidden charges per order. There is, however, a minimum invoice charge of AED 50 per order."
  },
  {
    question: "How do I know how much my total order amount is?",
    answer: "Once we collect your clothes, an itemized bill with the expected total order amount is generated. This bill will be shared with you via email and on the DipDap App. While the final bill amount will not vary a lot, there might be some difference based on the care label of each garment and your specified instructions."
  },
  {
    question: "How do I pay?",
    answer: "DipDap has both cash & card (debit/credit) payment options. You can choose to pay the total order amount on the delivery of your items. In case you decide to pay via card, we will charge a nominal authorization amount of USD 1 (~3.67 AED) from you."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if already open
    } else {
      setActiveIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="bg-gray-100 py-10 md:py-16 px-4 md:px-8 lg:px-20">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-pink-600 bg-pink-200 px-3 py-1 rounded">Laundry Service In Dubai</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">FAQs <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">Laundry Service</span></h2>
          <p className="mt-3 md:mt-4">How can we help you?</p>
        </div>
        <div className="space-y-8">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <button
                className="flex justify-between items-center w-full focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-sm md:text-base text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
