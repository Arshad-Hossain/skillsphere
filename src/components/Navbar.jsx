"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-b px-2 mb-5">
      <nav>
        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/courses"}>Courses</Link>
          </li>

          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
