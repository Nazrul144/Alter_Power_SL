import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <div>
        <div className="flex items-center justify-center">
          <h1 className="text-3xl">
            <span className="text-red-700">404</span> page not found
          </h1>
        </div>
        <Link
          className="flex justify-center items-center border-[1px] border-red-400 py-2 rounded-md w-44 font-bold mx-auto hover:bg-orange-400 bg-transparent duration-300 mt-8"
          href={"/"}
        >
          {" "}
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
