"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import home from "../../../public/assets/home.png";
import Image from "next/image";

const LocationUpdate = () => {
  const [datas, setContact] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetch
        const res = await fetch('https://alter-power.co.za/api/contact/');
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const contacts = await res.json();
        setContact(contacts);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      } finally {
        setIsLoading(false); // Set loading to false after fetch completes
      }
    };

    getData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.0 }}
      className="container mx-auto mb-12"
    >
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <span className="loading loading-dots loading-lg text-[#D96F32]"></span>
        </div>
      ) : (
        <>
          <div>
            <h1 className="font-semibold text-center text-xl text-[#D1A054]">
              ~~~~ Visit Us ~~~~
            </h1>
            <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-40 text-xl dark:text-gray-300 mx-auto mt-2 ">
              OUR LOCATION
            </h1>
            <div className="flex justify-center flex-col lg:flex-row gap-10 md:gap-28 items-center">
              <Image alt="home" height={600} width={550} src={home} />
              {/* <FaRightLong className="text-[#f8b259] text-7xl" /> */}
              <div className="flex flex-col gap-5">
                <div className="flex  items-start justify-between text-end md:gap-20">
                  <h1 className="text-xl flex items-center gap-5 dark:text-gray-300 font-semibold">
                    Phone :
                  </h1>
                  <div className="dark:text-neutral-400">
                    {datas?.phones?.map((phone, index) => (
                      <p key={index}>{phone.number}</p>
                    ))}
                  </div>
                </div>
                <div className="flex  items-start justify-between text-end md:gap-20">
                  <h1 className="text-xl flex items-center gap-5 dark:text-gray-300 font-semibold">
                    Address :
                  </h1>
                  <div className="dark:text-neutral-400">
                    {/* <div>
                  Cape Town Office,
                  <br />
                  Unit 8 Princess Vlei Road,
                  <br /> Constantiaberg,
                  <br />
                  Business Park Diep River, <br /> Cape Town
                </div> */}
                    {datas?.addresses?.map((add, index) => (
                      <div key={index}>
                        {add.full_address.split(/\r\n/).map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-start justify-between text-end md:gap-20">
                  <h1 className="text-xl flex items-center gap-5 dark:text-gray-300 font-semibold">
                    Contact info :
                  </h1>
                  <div className="dark:text-neutral-400">
                    {datas?.emails?.map((email, index) => (
                      <p key={index}>{email.address}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-40 text-xl mx-auto mt-16 mb-16 dark:text-gray-300">
            Where to Find Us
          </h1>
        </>
      )}
    </motion.div>
  );
};

export default LocationUpdate;
