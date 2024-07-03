'use client'
import AboveFooter from "@/components/abovefooter";
import React, { useState, useEffect } from "react";
import OffersTag from "./components/tag";
import Offerscards from "./components/offerscards";
import Modal from "./components/Modal";

export default function Offers() {
  const [activeCard, setActiveCard] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let timer;
    if (activeCard !== null) {
      timer = setTimeout(() => {
        setActiveCard(null);
      }, 5000); // Reset after 5 seconds
    }

    // Clean up the timer when the component unmounts or activeCard changes
    return () => clearTimeout(timer);
  }, [activeCard]);

  const handleCardClick = (imageSrc) => {
    setModalImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <>
      <OffersTag />
      <div className="container mx-auto px-10">
        <div>
          <h1 className="text-center text-4xl font-bold pt-10">Current Offers</h1>
          <p className="text-center text-lg weight-thin md:w-[1200px] mx-auto py-10">
            Take advantage of our daily/weekly ongoing offers for your laundry needs. Enjoy premium laundry services at amazing prices.
          </p>
        </div>
        <div className="grid md:grid-cols-3 md:gap-[60px] gap-10 md:px-40">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Offerscards
              key={i}
              imageSrc={`/offers/offer (${i}).jpg`}
              isActive={activeCard === i}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      <Modal show={showModal} onClose={closeModal} imageSrc={modalImage} />
      <br />
      <AboveFooter />
    </>
  );
}
