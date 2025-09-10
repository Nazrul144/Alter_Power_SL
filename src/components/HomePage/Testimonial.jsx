"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { motion } from "motion/react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch the data inside the useEffect and handle async logic properly
    const fetchData = async () => {
      const res = await fetch("/testimonial.json");
      const data = await res.json();
      setTestimonials(data);
    };

    fetchData(); // Call the async function
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.0 }}
      className="container mx-auto"
    >
      <div className="mt-16 x-5 md:mx-0">
        <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-40 text-2xl mx-auto mt-2 mb-16 text-[#D96F32]">
          Testimonial
        </h1>
        <h1 className="text-center font-bold text-3xl md:text-4xl mb-4 dark:text-gray-300">
          What Customer Says
        </h1>
        <p className="text-center dark:text-neutral-400 mx-5 md:mx-0">
          Our customers love our services! Here's what they have to say about
          us.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 mt-12 mb-12 mx-5 md:mx-0">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="card dark:bg-zinc-800 w-full border-[1px] shadow-md rounded-lg h-72 p-6 mx-auto "
          >
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-4">
                <div className="rounded-full overflow-hidden w-[50px] h-[50px] relative">
                  <Image
                    className="object-cover"
                    src={item.image}
                    alt="Image"
                    width={50}
                    height={50}
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold dark:text-gray-300">
                    {item.name}
                  </h1>
                  <h1 className="dark:bg-zinc-800">{item.designation}</h1>
                </div>
              </div>
              <div className="text-red-500"></div>
            </div>
            <p className="text-justify mt-4 mb-5 dark:text-neutral-400">
              {item?.description}
            </p>
            <div className="flex gap-2">
              <FaStar className="text-orange-400 text-xl" />
              <FaStar className="text-orange-400 text-xl" />
              <FaStar className="text-orange-400 text-xl" />
              <FaStar className="text-orange-400 text-xl" />
              <FaStar className="text-orange-400 text-xl" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
