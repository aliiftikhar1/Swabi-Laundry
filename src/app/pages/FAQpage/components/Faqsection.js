'use client'
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState();

  const faqs = [
    {
      question: "How should I prepare my clothes for pickup?",
      answer: "Please ensure your clothes are separated by color and type (e.g., whites, darks) before pickup. You don't need to worry about sorting by fabric type, as our professionals will handle that for you."
    },
    {
      question: "Do you provide eco-friendly laundry options?",
      answer: "Yes, we offer eco-friendly detergents and methods upon request. These options are designed to reduce environmental impact without compromising on cleaning quality."
    },
    {
      question: "Can I customize the washing instructions for delicate items?",
      answer: "Absolutely! You can specify any special instructions, such as delicate cycles, cold water wash, or air drying. Our team will ensure your instructions are followed meticulously."
    },
    {
      question: "What measures do you take to ensure the safety of my clothes?",
      answer: "We use secure processes and only trusted personnel handle your garments. Each item is tagged and tracked throughout its journey to and from our facilities to ensure security and accountability."
    },
    {
      question: "What happens if an item is damaged or lost during the laundry process?",
      answer: "While we take every precaution to handle your items with care, accidents can happen. In such rare cases, we have a comprehensive insurance policy that covers damages or loss. Please contact our customer support team immediately if you have any concerns."
    }
  ];
  

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-8 md:mb-20">
        <span className="text-pink-600 bg-pink-200 px-4 py-1 rounded">Laundry Service In Dubai</span>
        <h2 className="text-4xl font-bold mt-4">FAQs <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">Laundry Service</span></h2>
        <p className="mt-4">How can we help you?</p>
      </div>

      <div className="mb-8 md:mb-10">
        <div className="bg-gray-100 rounded-lg shadow-sm">
          {faqs.map((faq, index) => (
            <div key={index} className={`p-4 ${activeIndex === index ? 'active' : ''}`}>
              <div 
                className="flex items-center cursor-pointer" 
                onClick={() => toggleFAQ(index)}
              >
                <img 
                  width="24" 
                  height="24" 
                  loading="lazy" 
                  alt="Faq arrow" 
                  src="https://prod-cdn.laundryheap.com/assets/icons/faq_arrow-24dfee8c2a59feb1fad2a4d5b4ad20ea4f9366810857471b6d58f9bfae8cdc54.svg" 
                  className={`transition-transform transform ${activeIndex === index ? 'rotate-180' : ''}`}
                />
                <span className="ml-4 text-lg font-medium">{faq.question}</span>
              </div>
              <div className={`overflow-hidden transition-all max-h-screen ${activeIndex === index ? 'block' : 'hidden'}`}>
                <p className="mt-4 ml-10 text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
