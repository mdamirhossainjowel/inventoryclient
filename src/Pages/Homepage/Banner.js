import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-100 lg:w-2/3 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
       
        <div>
          <h1 className="text-5xl font-bold lg:w-1/2">
            Welcome to <span className="text-accent">Inventory System</span>!
          </h1>
          <p className="py-6">
            Inventory management software is a software system for tracking
            inventory levels, orders, sales and deliveries. It can also be used
            in the manufacturing industry to create a work order, bill of
            materials and other production-related documents.
          </p>
          <button className="btn btn-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
