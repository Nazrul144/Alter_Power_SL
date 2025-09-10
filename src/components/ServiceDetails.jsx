"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const serviceId = params.id; // your services.json uses string ids like "1"

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch("/services.json");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching service details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServiceDetails();
  }, []);

  const serviceDetails = services?.find((item) => item.id === serviceId);
  const relatedProjects = serviceDetails?.relatedProjects || [];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (!serviceDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-red-500">
          Service not found ❌
        </h2>
      </div>
    );
  }

  return (
    <div className="h-full">
      {/* Main Service Info */}
      <section className="bg-gray-600 dark:bg-gray-100 text-gray-100">
        <div className="container flex flex-col p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row justify-between">
          <div className="flex items-center justify-center p-6 mt-4 lg:mt-0">
            <Image
              src={serviceDetails.image}
              alt={serviceDetails.name}
              width={600}
              height={400}
              className="rounded-lg mt-16"
            />
          </div>

          <div className="flex flex-col justify-center p-3 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-2xl mt-4 lg:text-4xl mb-6 font-bold text-amber-300 ">
              {serviceDetails.name}
            </h1>
            <p className="text-xl mb-4">{serviceDetails.description}</p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mt-2">
              <Link
                href="/services"
                className="px-4 py-3 text-lg font-bold rounded bg-[#ff3811] text-white hover:bg-sky-700 duration-700"
              >
                Back to services
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-lg border rounded border-gray-100 dark:border-gray-800 text-white font-bold hover:bg-sky-700 duration-700"
              >
                Contact Us
              </Link>
              {serviceDetails.name === "Solar & Inverter Solutions" && (
                <Link
                  href={`/booking/${serviceDetails.id}`} // dynamic route
                  className="px-4 py-3 text-lg border rounded border-gray-100 bg-orange-700 text-white font-bold hover:bg-sky-700 duration-700"
                >
                  Online Book
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <h1 className="text-center mt-12 text-red-600 text-3xl font-bold">
        Related Projects
      </h1>

      <div className="container mx-auto mt-6 mb-12">
        {relatedProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((project) => (
              <div
                key={project.id}
                className="card bg-white shadow-md border border-gray-200 hover:shadow-lg transition duration-300 flex flex-col"
              >
                <figure>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="rounded-t-lg object-cover"
                  />
                </figure>
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="font-bold text-xl mb-2">{project.title}</h2>
                  <p className="text-gray-600 flex-grow">
                    {project.description}
                  </p>
                 
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No related projects found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
