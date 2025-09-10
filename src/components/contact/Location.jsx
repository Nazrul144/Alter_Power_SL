'use client'
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FcCallback } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "motion/react"

const Location = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.0 }}
      className="container mx-auto mb-12">
      <div>
        <h1 className="font-semibold text-center text-xl text-[#D1A054]">~~~~ Visit Us ~~~~</h1>
        <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-40 text-xl dark:text-gray-300 mx-auto mt-2 ">
          OUR LOCATION </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-base-100 lg:w-96 shadow-xl">
            <div >
              <div className="bg-[#D1A054] flex justify-center items-center ">
                <FcCallback className="text-2xl font-extrabold mt-2 mb-2 " />
              </div>
              <div className="bg-gray-200 w-[350px] mx-auto mb-3 text-gray-500">
                <h1 className="font-extrabold text-xl text-center pt-12 ">Phone</h1>
                <h1 className="text-center pb-1">Office (021)0018698</h1>
                <h1 className="text-center pb-48">Office (+27) 633193323</h1>
              </div>

            </div>
          </div>
          <div className="bg-base-100 lg:w-96 shadow-xl">
            <div >
              <div className="bg-[#D1A054] flex justify-center items-center ">
                <IoLocationOutline className="text-2xl font-extrabold mt-2 mb-2 " />
              </div>
              <div className="bg-gray-200 w-[350px] mx-auto mb-3 text-gray-500">
                <h1 className="font-extrabold text-xl text-center pt-12 pb-4">Address</h1>
                <h1 className="text-center pb-1">Cape Town Office</h1>
                <h1 className="text-center pb-1">Unit 8</h1>
                <h1 className="text-center pb-1">Princess Vlei Road</h1>
                <h1 className="text-center pb-1">Constantiaberg Business Park</h1>
                <h1 className="text-center pb-1">Diep River</h1>
                <h1 className="text-center pb-16">Cape Town</h1>
              </div>
            </div>
          </div>
          <div className="bg-base-100 lg:w-96 shadow-xl">
            <div >
              <div className="bg-[#D1A054] flex justify-center items-center ">
                <FaRegClock className="text-2xl font-extrabold mt-2 mb-2 " />
              </div>
              <div className="bg-gray-200 w-[350px] mx-auto mb-3 text-gray-500">
                <h1 className="font-extrabold text-xl text-center pt-12 pb-4">Contact info</h1>
                <h1 className="text-center pb-1 ">info@alter-power.co.za</h1>
                <h1 className="text-center pb-44">sales@alter-power.co.za</h1>
              </div>

            </div>
          </div>
        </div>
      </div>

      <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-40 text-xl mx-auto mt-16 mb-16 dark:text-gray-300">Where to Find Us</h1>

    </motion.div>
  );
};

export default Location;
