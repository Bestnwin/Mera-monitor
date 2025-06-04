import React, { useState } from 'react';
import RegisterModal from './RegisterModal';

const LiveDemoSection = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 px-4"
      style={{ backgroundColor: '#F5EEFD' }}
    >
      {/* Modal */}
      <RegisterModal isOpen={showModal} onClose={closeModal} />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#5b21b6] text-center mb-12 z-10">
        Watch Live Demo – Employee Monitoring Software
      </h2>

      {/* YouTube Embed */}
      <div className="w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden z-10">
        <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Q63Icc-WvlY" // Corrected URL for embedding
            title="Live Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 z-10">
        <button
          onClick={openModal}
          className="bg-[#5b21b6] text-white px-6 py-3 rounded-full text-lg transition-transform duration-200 hover:scale-105 hover:bg-[#4a1c99]"
        >
          Start for free
        </button>
        <button
          onClick={openModal}
          className="bg-transparent text-[#5b21b6] border-2 border-[#5b21b6] px-6 py-3 rounded-full text-lg transition-transform duration-200 hover:scale-105 hover:bg-[#ede9fe] hover:text-[#4c1d95]"
        >
          Book a free demo
        </button>

      </div>

      {/* Note */}
      <p className="text-sm text-gray-600 mt-4 z-10">
        Fast, free, and no card required
      </p>
    </div>
  );
};

export default LiveDemoSection;
