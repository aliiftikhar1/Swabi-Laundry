// components/WhatsAppButton.js
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (    
  <a href="https://wa.me/971589920080" target="_blank"  className="fixed bottom-4 right-4 w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center z-50 text-white text-3xl">
      <FaWhatsapp />
    </a>
  );
}
