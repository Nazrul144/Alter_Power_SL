"use client";
import { useParams } from "next/navigation";

const PaymentPage = () => {
  const { serviceId } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Payment Page</h1>
      <p>Service ID: {serviceId}</p>
      <p>Integrate Stripe, PayPal, or bKash here...</p>
      <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-300">
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
