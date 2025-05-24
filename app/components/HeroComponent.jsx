// HeroComponent.jsx
import React from 'react';
import { Link } from '@remix-run/react';


const HeroComponent = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
        Inspiring people to follow Jesus and fearlessly change the world.
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur. Pellentesque mauris imperdiet aliquam posuere aliquet. Laoreet elit nulla massa eget.
        </p>
        <a
          href="#"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-3 px-8 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          Watch our Sermon
        </a>
      </div>
    </div>
  );
};

export default HeroComponent;
