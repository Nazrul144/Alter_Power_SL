"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaFacebook } from "react-icons/fa6";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { motion } from "motion/react";

const TopProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/topProject.json");
      const data = await res.json();
      setProjects(data);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.0 }}
      className="container mx-auto mt-12 mb-12"
    >
      <div className="flex justify-center items-center">
        {loading && <span className="loading loading-dots loading-lg"></span>}
      </div>
      <div>
        <h1 className="font-bold text-center text-4xl dark:text-gray-300 mb-2">
          Our Top Projects
        </h1>
        <p className="text-center text-gray-600 dark:text-neutral-400 mx-5 md:mx-0">
          Explore some of our most successful and innovative projects. Each
          showcases our expertise, creativity, and commitment to delivering
          high-quality solutions.
        </p>
      </div>
      <Swiper
        spaceBetween={15}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1, // Show 1 card for mobile screens
            spaceBetween: 10, // Smaller gap for mobile
          },
          640: {
            slidesPerView: 2, // Show 2 cards for tablet screens
            spaceBetween: 10, // Smaller gap for tablet
          },
          1024: {
            slidesPerView: 3, // Show 3 cards for desktop screens
            spaceBetween: 15, // Smaller gap for desktop
          },
        }}
      >
        {projects?.map((project) => (
          <SwiperSlide
            key={project.id}
            className="flex justify-center  mb-12 mt-12 dark:text-gray-300"
          >
            <div className="card card-md dark:bg-zinc-800 shadow-md">
              <figure className="px-4 pt-4">
                <Image
                  src={project.image}
                  alt="project"
                  className="rounded-xl w-full"
                  width={300}
                  height={300}
                />
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default TopProjects;
