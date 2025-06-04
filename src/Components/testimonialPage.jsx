import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Salil Mathur",
    role: "Former CEO, Human Capital",
    text: "Mera Monitor’s powerful employee monitoring software turned my team into a productivity powerhouse—effortless tracking, real results.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Anita Rao",
    role: "HR Head, TechVision",
    text: "We scaled our team performance by 30% after switching to Mera Monitor.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "COO, InnovateX",
    text: "Perfect tool for remote team oversight. The insights it gives are unmatched.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Priya Sethi",
    role: "Founder, SmartHire",
    text: "Love how intuitive it is. Helped our HR identify gaps and boost focus.",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    name: "Manish Kapoor",
    role: "VP Operations, CoreTrack",
    text: "My team's productivity saw real measurable results. Must-have tool!",
    image: "https://i.pravatar.cc/100?img=5",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  fade: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const TestimonialPage = () => {
  return (
    <div className="bg-purple-50 min-h-screen py-40 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          See Why Mera Monitor is the
          <br />
          <span className="text-purple-700">#1 Choice for Monitoring</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">Trusted by Business Leaders</p>
      </div>

      <Slider {...settings}>
        {testimonials.map((t) => (
          <div key={t.id} className="py-20">
            <TestimonialCard {...t} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialPage;
