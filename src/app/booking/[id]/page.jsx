"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const BookingPage = () => {
  const params = useParams();
  const router = useRouter();
  const serviceId = params.id;
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      const res = await fetch("/services.json");
      const data = await res.json();
      const selected = data.find((s) => s.id === serviceId);
      setService(selected);
    };
    fetchService();
  }, [serviceId]);

  if (!service)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
          {service.name}
        </h1>
        <p className="text-gray-600 mb-4 text-center">{service.description}</p>
        <div className="text-center mb-6">
          <p className="text-xl font-semibold mb-2">Price: $500</p>
          <p className="text-gray-500">Additional info or article about this service.</p>
        </div>
        <button
          onClick={() => router.push(`/payment/${service.id}`)}
          className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
