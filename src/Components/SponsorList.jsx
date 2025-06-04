// SponsorList.jsx
import React, { useEffect, useState, useRef } from "react";
import "./SponsorList.css";
import sponsorLogo1 from "/home/kshit/meramonitor/signupPage/src/assets/sponsors/1.png";
import sponsorLogo2_2 from "/home/kshit/meramonitor/signupPage/src/assets/sponsors/2_2.png";
import sponsorLogo4_2 from "/home/kshit/meramonitor/signupPage/src/assets/sponsors/4_2.png";
import sponsorLogo5_2 from "/home/kshit/meramonitor/signupPage/src/assets/sponsors/5_2.png";
import sponsorLogo6 from "/home/kshit/meramonitor/signupPage/src/assets/sponsors/6.png";
import sponsorLogo8_1 from "/home/kshit/meramonitor/signupPage/src/assets/sponsors/8_1.png";
import sponsorLogo10_1 from "/home/kshit/meramonitor/signupPage/src/assets/sponsors/10_1.png";
import sponsorLogo11_1 from "/home/kshit/meramonitor/signupPage/src/assets/sponsors/11_1.png";
import sponsorLogo12_1 from "/home/kshit/meramonitor/signupPage/src/assets/sponsors/12_1.png";


export default function SponsorList() {
  const sponsors = [
    { name: "Sponsor 1", logo: sponsorLogo1 },
    { name: "Sponsor 2", logo: sponsorLogo2_2 },
    { name: "Sponsor 3", logo: sponsorLogo4_2 },
    { name: "Sponsor 4", logo: sponsorLogo5_2 },
    { name: "Sponsor 5", logo: sponsorLogo6 },
    { name: "Sponsor 6", logo: sponsorLogo8_1 },
    { name: "Sponsor 7", logo: sponsorLogo10_1 },
    { name: "Sponsor 8", logo: sponsorLogo11_1 },
    { name: "Sponsor 9", logo: sponsorLogo12_1 },
    // Add more if you have them, or duplicate existing ones to fill space for scrolling
  ];

  const contentRef = useRef(null);
  const [scrollDuration, setScrollDuration] = useState(30); // Default duration

  useEffect(() => {
    // Calculate scroll duration based on content width for consistent speed
    if (contentRef.current) {
      const contentWidth = contentRef.current.scrollWidth; // Use scrollWidth for total content width
      // Adjust this multiplier to control the speed.
      // Smaller multiplier = faster scroll.
      const speedMultiplier = 20; // pixels per second (adjust as needed, roughly 20px/s)
      const duration = contentWidth / speedMultiplier; // duration in seconds
      setScrollDuration(duration); // Use duration in seconds directly
    }
  }, [sponsors.length]); // Recalculate if number of sponsors changes

  // Duplicate the sponsor list for seamless looping.
  // Duplicate enough times so that the total width exceeds the viewport significantly
  // to ensure a continuous scroll.
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="bg-purple-100 py-0 px-0 sm:px-0 lg:px-0 overflow-hidden"> {/* py- and px- added for section padding but overflow-hidden is key */}
      <div className="text-center mb-8"> {/* Adjusted for title placement */}
        <h2 className="text-xl sm:text-2xl font-semibold text-purple-800">
          Our Valued Partners
        </h2>
      </div>
      <div className="relative w-full overflow-hidden whitespace-nowrap"> {/* Key: w-full, overflow-hidden, whitespace-nowrap */}
        <div
          ref={contentRef}
          className="inline-flex horizontal-marquee-duplicate items-center py-4" // Use inline-flex for horizontal flow, apply animation
          style={{ '--scroll-duration': `${scrollDuration}s` }} // Pass duration via CSS variable
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`} // More robust key for duplicated items
              className="flex-shrink-0 mx-8 flex items-center justify-center" // flex-shrink-0 to prevent shrinking, mx- for spacing
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-12 w-auto object-contain" // max-h- for fixed height, w-auto maintains aspect ratio
                // Removed filter grayscale and hover effects
              />
            </div>
          ))}
        </div>
        {/* Optional: Add subtle gradient overlays for a fading effect at the edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-purple-100 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-purple-100 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}