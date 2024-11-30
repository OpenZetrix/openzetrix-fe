"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import NavbarMobile from "./navbar_mobile";

export default function Navbar(props: any) {
  // Global context
  const activeKey = props.activeKey;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navbar button list
  const navbarList = [
    { title: "Home", key: "home", link: "/" },
    { title: "Wizard", key: "wizard", link: "/wizard" },
  ];

  return (
    <div className="flex pt-4 px-4 md:px-8 lg:px-12">
      <button
        className="block md:hidden mr-4"
        onClick={() => setMobileMenuOpen(true)}
      >
        <Bars3Icon className="w-5 h-5" />
      </button>
      {/* Mobile Menu */}
      <NavbarMobile
        sidebarOpen={mobileMenuOpen}
        setSidebarOpen={setMobileMenuOpen}
        itemList={navbarList}
        activeKey={activeKey}
      />
      <div className="h-12 flex w-full items-center">
        <Link className="inline-flex items-center" href="/">
          <div className="hidden md:block text-xl font-bold tracking-wide">OpenZetrix</div>
        </Link>
        <nav className="px-8 space-x-6 hidden md:block">
          {/* Loop each nav list */}
          {navbarList.map((item) => {
            return (
              <Link
                key={item.key}
                className={`font-medium hover:text-text_white ${activeKey == item.key
                  ? "text-text_white font-bold underline underline-offset-8 decoration-4"
                  : "text-text_secondary"
                  }`}
                href={item.link}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
