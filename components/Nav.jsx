"use client";

import Image from "next/image";
import Link from "next/link";

import { getProviders, sigIn, sigOut, useSessions } from "next-auth/react";
import { useEffect, useState } from "react";

const Nav = () => {
   const isUserLoggedIn = true;

   return (
      <nav className="flex-between w-full mb-16 pt-3">
         <Link href="/" className="flex gap-2 flex-center">
            <Image
               src="/assets/images/logo.svg"
               alt="F-Form"
               width={30}
               height={30}
               className="object-contain"
            />
            <p className="logo_text">F-Form</p>
         </Link>

         {/* Desktop Navigation */}
         <div className="sm:flex hidden">
            {isUserLoggedIn ? (
               <div className="flex gap-3 md:gap-5">
                  <Link href="/create-prompt" className="black_btn">
                     Create Post
                  </Link>
                  <button
                     type="button"
                     onClick={sigOut}
                     className="outline_btn">
                     Sign Out
                  </button>

                  <Link href="/profile">
                     <Image
                        src="/assets/images/logo.svg"
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="Profile"
                     />
                  </Link>
               </div>
            ) : (
               <>
                  {/* 1:07:28 */}
                  {/* Login Section */}
               </>
            )}
         </div>
      </nav>
   );
};

export default Nav;
