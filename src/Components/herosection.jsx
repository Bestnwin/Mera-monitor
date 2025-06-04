import React, { useState } from "react";
import teamImage from "/home/kshit/meramonitor/signupPage/src/assets/team.png";
import RegisterModal from "./RegisterModal";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>

      

      {/* Modal */}
      <RegisterModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <section className="bg-purple-100 py-56 px-6 sm:px-10 lg:px-24" >



        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          
          {/* ─────────── Left content ─────────── */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 py-15">
              Employee Monitoring Software&nbsp; <br />
              built for Exponential
              <span className="text-purple-700"> Growth</span>
            </h1>

            <p className="text-xl text-purple-800 font-semibold mb-6">
              Track. analyze. grow.
            </p>

            {/* Main CTA buttons */}
            <div className="flex gap-4 mb-4">
              <button
                className="border border-purple-700 text-black px-6 py-3 rounded-full font-medium hover:bg-purple-700 hover:text-white transition"
                onClick={() => setShowModal(true)}
              >
                Start for free
              </button>

              <button
                className="bg-purple-300 text-purple-800 px-6 py-3 rounded-full font-medium hover:bg-purple-400 transition"
                onClick={() => setShowModal(true)}
              >
                Book a free demo
              </button>
            </div>

            <p className="text-gray-700 text-sm mb-6">
              Fast, free, and no card required
            </p>

            <p className="text-purple-700 font-medium max-w-md">
              Mera Monitor gives you real-time visibility into your team’s work
              habits, time usage, and bottlenecks.
            </p>

            <p className="mt-6 text-sm text-gray-600">
              Trusted by 1000+ Growing Teams
            </p>

            {/* Secondary buttons (Sign Up / Login) */}
            <div className="mt-6 flex gap-4">
              <button
                className="bg-purple-300 text-purple-800 px-6 py-3 rounded-full font-medium hover:bg-purple-400 transition "
                onClick={() => setShowModal(true)}
              >
                Sign Up and get 999rs amazon gift card
              </button>
            </div>
          </div>

          {/* ─────────── Right illustration ─────────── */}
          <div className="lg:w-1/2 flex justify-center pl-100">
            <img
              src={teamImage}
              alt="Team illustration"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
