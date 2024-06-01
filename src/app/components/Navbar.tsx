"use client";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { IoMdDownload } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { SiMinds } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDownload = () => {
    const pdfUrl = `/kartik2024.pdf`; // Construct the path to the PDF
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "kartik_2024.pdf"; // Set the download filename
    link.click();
  };

  return (
    <div
      id="nav"
      className=" h-[96px] px-4 glass z-50  text-gray-300  max-w-[1200px] flex fixed top-0 left-0 right-0 items-center justify-between mx-auto"
      style={{
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
      }}
    >
      <h1 className=" text-xl font-bold">Kartik Malik</h1>
      <ul className=" hidden md:flex gap-6 text-xl">
        <li className=" cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className=" cursor-pointer">
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className=" cursor-pointer">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className=" cursor-pointer">
          <Link
            to="testimonial"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Testimonial
          </Link>
        </li>
        <li className=" cursor-pointer">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li className=" cursor-pointer">
          <Link
            to=""
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleDownload}
          >
            Download Resume
          </Link>
        </li>
      </ul>

      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            className=" bg-[#232323] flex justify-between text-gray-300 text-xl font-bold"
          >
            Kartik Malik{" "}
            <AiOutlineClose
              size={30}
              onClick={onClose}
              className=" cursor-pointer"
            />
          </DrawerHeader>
          <DrawerBody className=" bg-[#232323] flex flex-col ">
            <Link
              className="py-3 cursor-pointer px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#2d2c2c] text-gray-300 hover:bg-[#333232] mb-3"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={onClose}
            >
              <FaHome className=" text-xl" />
              Home
            </Link>

            <Link
              onClick={onClose}
              className="py-3 px-4 cursor-pointer inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#2d2c2c] text-gray-300 hover:bg-[#333232] mb-3"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <MdOutlineWorkspacePremium className=" text-xl" />
              Work
            </Link>
            <Link
              onClick={onClose}
              className="py-3 px-4 cursor-pointer inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#2d2c2c] text-gray-300 hover:bg-[#333232] mb-3"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <SiMinds className=" text-xl" />
              Skills
            </Link>
            <Link
              onClick={onClose}
              className="py-3 px-4 cursor-pointer inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#2d2c2c] text-gray-300 hover:bg-[#333232] mb-3"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <IoIosContact className=" text-xl" />
              Contact
            </Link>
            <Link
              className=" p-3 cursor-pointer px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#2d2c2c] text-gray-300 hover:bg-[#333232] mb-3"
              to=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => {
                handleDownload();
                onClose();
              }}
            >
              <IoMdDownload className=" text-xl" /> Download
              Resume
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <div
        onClick={onOpen}
        className="block cursor-pointer md:hidden text-gray-300 fixed right-10 top-10 z-50"
      >
        <AiOutlineMenu size={30} />
      </div>
    </div>
  );
};

export default Navbar;
