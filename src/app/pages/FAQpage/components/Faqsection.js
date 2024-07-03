'use client'
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState();

  const faqs = [
    {
      question: "Can you remove the stain on my items?",
      answer: "For dry cleaning items, our specialist dry cleaners use the highest quality equipment and industry-leading stain removal products. We cannot promise all stains will be removed, but we do promise we will do our best. Let us know in the app or tell our driver which items have stains you would like us to pay attention to."
    },
    {
      question: "Do you accept credit card payments?",
      answer: "Yes. We accept all forms of payments - cash, credit card, and payment link."
    },
    {
      question: "What should I prepare/do for my first pickup?",
      answer: "Just have your clothes ready. Our driver will bring a laundry bag for you to place any loose items in. Alternatively, you can provide your own bag if preferred. If you have any special instructions for the care of your clothes, please include those details in the laundry bag. This will allow us to accommodate your specific needs."
    },
    {
      question: "Do I have to be home during pickup or drop off?",
      answer: "No, not necessarily. You can leave your laundry bag outside your front door, or give them to your building's doorman if you have one. Many of our customers feel comfortable leaving their laundry this way. So you don't need to worry about your items being taken if you're not there when the driver arrives."
    },
    {
      question: "Can you hang/air dry items?",
      answer: "Yes, we do. All clothes avoid high temperature dryer and go through our unique process. Put simply, they last longer and maintain texture for 30-50% longer than when put through machine dryers."
    },
    {
      question: "What is the minimum charge?",
      answer: "There is no minimum charge required by us."
    },
    {
      question: "How will I know how much my order is?",
      answer: "An itemized receipt will be shared once your order has been successfully delivered. If you disagree with something, please message us and we'll take care of it."
    },
    {
      question: "Who chooses if my clothes will be washed or dry cleaned?",
      answer: "Our team is well trained in choosing one of our 20+ cleaning programs, which are suitable for different types of fabrics. Our textile cleaning experts are trained to carefully read each item's care instructions and decide on the cleaning program."
    },
    {
      question: "What is the turnaround time?",
      answer: "Depends on the service requested.\n- Press Only: 24 hours\n- Wash & Iron: 48 hours\n- Dry Cleaning: 48 hours\n- Carpet/Blanket Cleaning: 72 hours\nYou can select same day delivery for a 50% surcharge fee."
    },
    {
      question: "Do you offer carpet cleaning?",
      answer: "Yes. We offer advanced machines to offer a premium carpet cleaning service."
    },
    {
      question: "Do you offer free pick-up and delivery?",
      answer: "Yes. We offer free pick-up and delivery across multiple service areas."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-10 mt-5">
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
