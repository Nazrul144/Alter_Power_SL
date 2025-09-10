"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ModeToggle } from "../mode-toggoler";
import { getWhatsappNumber } from "@/providers/what'sappProvider";

const Navbar = () => {
  const pathName = usePathname();
  const { WhatsAppNumber, setNumber } = getWhatsappNumber();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const fetchWhatsApp = async () => {
    const res = await fetch("https://alter-power.co.za/api/contact/whatsapp/");
    if (!res.ok) {
      console.log("Failed to fetch what's app number");
    }
    const whatsapp = await res.json();
    setNumber(whatsapp);
  };

  useEffect(() => {
    fetchWhatsApp();
  }, []);

  return (
    <div
      className={`${
        scrollY > 100 ? "bg-[#F8B259]" : "bg-[#b2b2b2] md:bg-black/30 "
      } transition-colors duration-500  shadow-xl fixed z-10 w-full top-0`}
    >
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-zinc-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links?.map((link) => (
                <Link key={link.path} href={link.path}>
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image
              className="hidden lg:block"
              src="/logo.png"
              alt="Logo"
              width={100}
              height={60}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1 flex gap-4 text-xl font-bold ">
            {links?.map((link) => (
              <Link
                className={`hover:text-[#ad6237] duration-300 ${
                  pathName == link.path
                    ? "text-[#D96F32]"
                    : scrollY > 100
                    ? "text-black"
                    : "text-white"
                }`}
                key={link.path}
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex space-x-3 items-center">
            <div className="avatar"></div>
            <ModeToggle />
            <a href={`https://wa.me/${WhatsAppNumber?.number}`} className="font-bold flex gap-2 items-center" title="click">
              <FaWhatsapp className="text-4xl text-green-800 font-bold" />
              <div>
                <h1 className="font-bold text-green-800">
                  Call Now:
                  {/* <a href={`tel:+${WhatsAppNumber?.number}`} className="font-bold "> */}{" "}
                  +{WhatsAppNumber?.number}
                  {/* </a> */}
                </h1>
                <h1 className="font-bold text-sky-800">For Emergency 24/7, 365!</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const links = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default Navbar;
