"use client";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import React from "react";

const PaymentPage = () => {
  const { serviceId } = useParams();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Secure Payment
        </h1>

        {/* Service Info */}
        <div className="bg-gray-50 p-4 rounded-lg border mb-6">
          <p className="text-gray-600 text-sm">Service ID:</p>
          <p className="font-semibold text-lg text-gray-800">{serviceId}</p>
          <p className="text-gray-500 mt-2">Total Amount: $500</p>
        </div>

        {/* Payment Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                CVV
              </label>
              <input
                type="password"
                placeholder="***"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold py-3 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Pay $500
          </button>
        </form>

        {/* Alternative Payments */}
        <div className="mt-6 text-center">
          <div className="flex justify-center gap-4">

            <Button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:opacity-80 transition">
              Stripe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
