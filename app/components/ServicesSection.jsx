// ServicesSection.jsx
import React from 'react';

const ServicesSection = () => {
  return (
    <section className="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
      {/* Title */}
      <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-600 dark:border-yellow-600">
        Services
      </div>

      <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
        {/* First Row */}
        <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <img
            className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="billboard image"
          />
          <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Impact Is our Mission
            </h2>
            <p className="text-md mt-4">
            NIFES exists to reach out to students through evangelism and discipleship training, to mobilize them upon graduation to impact the Campus, Church and Society with godly values.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
          <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Transformation Is our Vision
            </h2>
            <p className="text-md mt-4">
            To be a movement of Christ-like students in Nigeria’s tertiary institutions transforming the campus, and society upon graduation.
            </p>
          </div>
          <img
            className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
            src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="billboard image"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
