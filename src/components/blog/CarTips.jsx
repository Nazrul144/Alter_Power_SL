
'use client'
import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';
import { motion } from "motion/react"

const CarTips = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.0 }}
      className=" py-10 mt-[70px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 animate__animated animate__tada animate__delay-1s	">
          <h2 className="text-3xl font-semibold dark:text-gray-300 ">Power Solutions & Maintenance Tips</h2>
          <p className="text-lg mt-4 dark:dark:text-neutral-400">Key advice to ensure your property’s energy systems, from solar panels to <br /> electrical services,  run smoothly and efficiently.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="dark:dark:bg-zinc-800 dark:text-neutral-400 rounded-lg shadow-lg overflow-hidden">
            <Image src="/regular.webp" width={1000} height={700} alt="Oil Change" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-lg dark:text-gray-300">Regular Maintenance for Energy Systems</h3>
              <p className="text-gray-600 mt-2 dark:text-neutral-400">Proper maintenance of your solar panels, inverters, and electrical systems is <br /> essential for optimal performance and longevity. Learn why it's crucial...</p>
              <Link href={'/engine_details'} className="text-blue-500 mt-4 inline-block">Read more...</Link>
            </div>
          </div>
          <div className="dark:dark:bg-zinc-800 dark:text-neutral-400 rounded-lg shadow-lg overflow-hidden">
            <Image src="/energy.webp" width={1000} height={700} alt="Tire Check" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-lg dark:text-gray-300">Energy System Maintenance</h3>
              <p className="text-gray-600 mt-2 dark:text-neutral-400">Regular maintenance of your solar panels, inverters, and electrical systems ensures optimal <br />performance and efficiency, just like tire maintenance does for your vehicle.</p>
              <Link href={"/tire_details"} className="text-blue-500 mt-4 inline-block">Read more...</Link>
            </div>
          </div>
          <div className="dark:dark:bg-zinc-800 dark:text-neutral-400 rounded-lg shadow-lg overflow-hidden">
            <Image src="/power.jpeg" width={1000} height={700} alt="Tire Check" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-lg dark:text-gray-300">Efficient Electrical System Maintenance</h3>
              <p className="text-gray-600 mt-2 dark:text-neutral-400">Regular servicing and checks of your electrical systems will help prevent potential issues <br /> and ensure the safe operation of your property.</p>
              <Link href={"/oil_details"} className="text-blue-500 mt-4 inline-block">Read more...</Link>
            </div>
          </div>
          {/* <!-- Add more cards here --> */}
        </div>
      </div>
    </motion.div>

  );
}

export default CarTips;
