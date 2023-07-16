import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { IoMdBriefcase } from "react-icons/io";
import { GrServices, GrContact } from "react-icons/gr";
import { BsCash } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";

export const SidebarData = [
  {
    title: "HOME",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "ABOUT US",
    path: "/",
    icon: <FcAbout />,
    cName: "nav-text"
  },
  {
    title: "PORTFOLIO",
    path: "/",
    icon: <IoMdBriefcase />,
    cName: "nav-text"
  },
  {
    title: "OUR SERVICE",
    path: "/",
    icon: <GrServices />,
    cName: "nav-text"
  },
  {
    title: "PRICING",
    path: "/",
    icon: <BsCash />,
    cName: "nav-text"
  },
  {
    title: "CONTACT US",
    path: "/",
    icon: <GrContact />,
    cName: "nav-text"
  },
  {
    title: "CONSULTATION",
    path: "/",
    icon: <MdOutlineContactPhone />,
    cName: "nav-text"
  }
];
