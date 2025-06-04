import React, { useState } from 'react';

const featureData = [
  {
    id: 'analytics',
    name: 'Analytics Dashboard',
    image: '/home/kshit/meramonitor/signupPage/src/assets/KeyFeatures/image 5.png',
  },
  {
    id: 'screen-monitoring',
    name: 'Screen Monitoring',
    image: '/home/kshit/meramonitor/signupPage/src/assets/KeyFeatures/image 6.png',
  },
  {
    id: 'productivity-reports',
    name: 'Productivity Reports',
    image: '/home/kshit/meramonitor/signupPage/src/assets/KeyFeatures/image 7.png',
  },
  {
    id: 'apps-websites-tracking',
    name: 'Apps/ Websites Tracking',
    image: '/home/kshit/meramonitor/signupPage/src/assets/KeyFeatures/image 8.png',
  },
  {
    id: 'private-mode',
    name: 'Private Mode',
    image: '/home/kshit/meramonitor/signupPage/src/assets/KeyFeatures/image 10-1.png',
  },
  {
    id: 'attendance-tracking',
    name: 'Attendance Tracking',
    image: '/home/kshit/meramonitor/signupPage/src/assets/KeyFeatures/image 10.png',
  },
  {
    id: 'time-claim',
    name: 'Time Claim',
    image: '/home/kshit/meramonitor/signupPage/src/assets/KeyFeatures/image 11.png',
  },
];

const KeyFeatures = () => {
  // Initialize with the first feature as active
  const [activeFeatureId, setActiveFeatureId] = useState(featureData[0].id);

  // For the "clockwise" animation, we can cycle through directions.
  // This is a simple way; a more complex one would track previous/next feature index.
  const animationDirections = ['rotate-in-from-right', 'rotate-in-from-bottom', 'rotate-in-from-left', 'rotate-in-from-top'];
  const [currentAnimationDirection, setCurrentAnimationDirection] = useState(animationDirections[0]);

  const handleMouseEnter = (id) => {
    if (activeFeatureId !== id) {
      setActiveFeatureId(id);
      // Cycle through animation directions or pick one based on logical order if desired
      const nextIndex = (animationDirections.indexOf(currentAnimationDirection) + 1) % animationDirections.length;
      setCurrentAnimationDirection(animationDirections[nextIndex]);
    }
  };

  return (
    <div className="flex flex-col items-center py-16 px-4 bg-[#f8f8fa] min-h-screen">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Key Features</h2>
      <h3 className="text-xl md:text-2xl text-gray-600 mb-12">
        Everything You Need To Track, Manage and Improve Team Productivity
      </h3>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 w-full max-w-7xl">
        {/* Features List */}
        <div className="flex-shrink-0 w-full lg:w-96 p-6 bg-white rounded-2xl shadow-xl">
          {featureData.map((feature) => (
            <p
              key={feature.id}
              className={`text-lg text-gray-600 py-3 px-4 mb-2 cursor-pointer transition-all duration-300 rounded-lg relative ${
                activeFeatureId === feature.id
                  ? 'text-[#5b21b6] font-bold bg-[#f0eaff] shadow-md -translate-x-1'
                  : 'hover:text-blue-500 hover:translate-x-1'
              }`}
              onMouseEnter={() => handleMouseEnter(feature.id)}
            >
              {feature.name}
            </p>
          ))}

          {/* Buttons */}
          {/* Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center flex flex-wrap justify-center gap-x-2 sm:gap-x-4">
                <button className="bg-[#5b21b6] text-white px-4 py-2 rounded-full text-base sm:text-lg mb-2 sm:mb-0 transition-transform duration-200 hover:scale-105 hover:bg-[#4a1c99] whitespace-nowrap">
                    Start for free
                </button>
                <button className="bg-transparent text-[#5b21b6] border-2 border-[#5b21b6] px-4 py-2 rounded-full text-lg transition-transform duration-200 hover:scale-105 hover:bg-[#ede9fe] hover:text-[#4c1d95]">
                    Book a free demo
                </button>

                <p className="text-sm text-gray-500 mt-4 w-full">Fast, free, and no card required</p>
            </div>
        </div>

        {/* Feature Images */}
        <div className="relative flex-grow w-full lg:w-[600px] h-[400px] md:h-[500px] lg:h-[400px] overflow-hidden rounded-2xl shadow-2xl bg-white">
          {featureData.map((feature) => (
            <img
              key={feature.id}
              src={feature.image}
              alt={feature.name}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-600 ${
                activeFeatureId === feature.id
                  ? `opacity-100 scale-100 z-10 shadow-2xl ${currentAnimationDirection}` // Apply current animation direction
                  : 'opacity-0 scale-95 z-0'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;