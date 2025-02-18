import { services } from "@/app/constants/data";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I offer responsive and visually captivating web design services,
        including landing pages, portfolios, and interactive websites. Let’s
        create seamless, user-friendly digital experiences tailored to your
        needs!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightBlueHover hover:-translate-y-1 duration-500 hover:shadow-lightBlack dark:text-white dark:hover:text-black"
          >
            <service.icon className="w-10 h-10 text-blue-500 bg-[#ABE7FE] p-2 rounded-md" />
            <h3 className="text-lg my-4">{service.title}</h3>
            <p className="text-sm text-gray-500 leading-5">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
