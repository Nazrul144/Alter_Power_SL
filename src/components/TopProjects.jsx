"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const TopProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/topProject.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading top projects:", err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Top Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-xl transform hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProjects;
