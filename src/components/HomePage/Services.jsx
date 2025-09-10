'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"; // Fixed motion import from "motion/react" to "framer-motion"
import Link from 'next/link';

const Services = () => {

  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetch
        const res = await fetch('/services.json'); // local url: http://127.0.0.1:8000/    //production url: https://alter-power.co.za/api/services/
        const data = await res.json();
        console.log(data);
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetch completes
      }
    };
    loadData();
  }, []);

  
  

  //  Use base URL for image paths
  const baseImageUrl = '/services.json';  //production url: https://alter-power.co.za

  return (
    <div className='container mx-auto pt-[100px] mb-16'>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.0 }}
        className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-48 text-2xl dark:text-gray-300 mx-auto mt-2 mb-8">
        OUR SERVICES
      </motion.h1>

      {/* Display loading indicator while fetching */}
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <span className="loading loading-dots loading-lg text-[#D96F32]"></span>
        </div>
      ) : (
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          services?.map((service) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.0 }}
              key={service.id} className="card bg-gray-200 hover:bg-gray-300 text-gray-700 shadow-sm border-[1px] dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 mx-5 md:mx-0 ease-in duration-200">
              <figure className="px-10 pt-10">
                {/* Display default image if no image is provided */}
                <Image
                  src={service.image}
                  alt="Services_image"
                  width={500}
                  height={500}
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl text-gray-700 dark:text-gray-300">{service.name}</h2>
                <p className='text-justify text-gray-600 dark:text-gray-200'>{service.description.substring(0, 110)+"..."}</p>
              </div>
                <Link className='bg-[#D96F32] text-gray-100 mx-10 mb-5 px-4 py-2  text-center rounded-md transition-all ease-in-out duration-500 hover:bg-[#ad6237]' href={`/services/${service.id}`}>View Details</Link>
             
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
