import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="py-8 px-10">
        {/* Services */}
        <div className="my-10">
          <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold leading-tight ml-3 mb-4 text-cyan-800">Services</h1>
          <div className="lg:flex justify-between mx-4 lg:mx-10">
            <div className="flex flex-col lg:flex-row w-full overflow-hidden mb-8 lg:mb-0">
              <img
                src="public/images/service-one.jpg"
                alt="Self-managed Teams for Startups"
                className="w-full lg:w-1/2 object-cover"
              />
              <div className="px-4 lg:px-5 mt-8 lg:mt-60">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">IT and Software Support for Startups and Organizations</h2>
                <p className="mb-4">
                  Hire a team of Developers, Designers, Quality Assurance
                  Specialists, DevOps Engineers, and other experts you may need to
                  work hand-by-hand on your digital product.
                </p>
                <a href="#" className="text-blue-500 font-semibold">View Managed Teams &rarr;</a>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center mx-4 lg:mx-20">
            <div className="flex flex-col lg:flex-row w-full overflow-hidden">
              <div className="px-4 lg:px-14 mt-8 lg:mt-60">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">SaaS Services for organizations, Government Agencies & Small Businesses</h2>
                <p className="mb-4">
                  SaaS services include ERPs, Sales Hub, Service Hub,
                  CMS Hub, Operations Hub, and Onboarding.
                </p>
                <a href="#" className="text-blue-500 font-semibold">View Solution &rarr;</a>
              </div>
              <img
                src="public/images/service-two.jpg"
                alt="HubSpot Services for Marketing Agencies"
                className="w-full lg:w-1/2 object-cover"
              />
            </div>
          </div>
        </div>
        {/* Featured Clients */}
        <div className="bg-gray-300 my-40 p-4">
          <h1 className="text-lg sm:text-xl md:text-3xl font-bold mb-4 text-cyan-800">Featured Clients</h1>
          <div className="relative overflow-hidden h-64">
            <div className="flex animate-marquee whitespace-nowrap">
              <div className="flex-none w-full sm:w-1/2 md:w-1/3 p-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-full">
                  <img
                    src="path/to/client-image1.jpg"
                    alt="Client 1"
                    className="object-cover w-full h-36"
                  />
                  <div className="p-4">
                    <h2 className="font-bold">ERP for B2B companies</h2>
                    <p className="text-sm">Anders Hermansson, CEO & Co-founder, Business Reflex</p>
                  </div>
                </div>
              </div>
              <div className="flex-none w-full sm:w-1/2 md:w-1/3 p-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-full">
                  <img
                    src="path/to/client-image2.jpg"
                    alt="Client 2"
                    className="object-cover w-full h-36"
                  />
                  <div className="p-4">
                    <h2 className="font-bold">Modern Digital Marketing</h2>
                    <p className="text-sm">Sigurd J. Vik, Managing Director, Coupler</p>
                  </div>
                </div>
              </div>
              <div className="flex-none w-full sm:w-1/2 md:w-1/3 p-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-full">
                  <img
                    src="path/to/client-image3.jpg"
                    alt="Client 3"
                    className="object-cover w-full h-36"
                  />
                  <div className="p-4">
                    <h2 className="font-bold">Best free sports team management app</h2>
                    <p className="text-sm">Oleg Topchiy, CTO, Spond</p>
                  </div>
                </div>
              </div>
              {/* Duplicate the items for continuous scrolling effect */}
              <div className="flex-none w-full sm:w-1/2 md:w-1/3 p-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-full">
                  <img
                    src="path/to/client-image1.jpg"
                    alt="Client 1"
                    className="object-cover w-full h-36"
                  />
                  <div className="p-4">
                    <h2 className="font-bold">Digital marketing for B2B companies</h2>
                    <p className="text-sm">Anders Hermansson, CEO & Co-founder, Business Reflex</p>
                  </div>
                </div>
              </div>
              <div className="flex-none w-full sm:w-1/2 md:w-1/3 p-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-full">
                  <img
                    src="path/to/client-image2.jpg"
                    alt="Client 2"
                    className="object-cover w-full h-36"
                  />
                  <div className="p-4">
                    <h2 className="font-bold">Modern Digital Marketing</h2>
                    <p className="text-sm">Sigurd J. Vik, Managing Director, Coupler</p>
                  </div>
                </div>
              </div>
              <div className="flex-none w-full sm:w-1/2 md:w-1/3 p-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-full">
                  <img
                    src="path/to/client-image3.jpg"
                    alt="Client 3"
                    className="object-cover w-full h-36"
                  />
                  <div className="p-4">
                    <h2 className="font-bold">Best free sports team management app</h2>
                    <p className="text-sm">Oleg Topchiy, CTO, Spond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
