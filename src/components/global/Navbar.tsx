"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    route: "HOME",
    href: "/",
  },
  {
    route: "ABOUT",
    href: "/about",
  },
  {
    route: "LOGIN",
    href: "/sign-up",
  },
];
const MobileHamburgerMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div autoFocus={false}>
      <Drawer>
        <DrawerTrigger>
          <MenuIcon className="md:hidden text-white" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <div className="flex items-center gap-[2px] text-3xl font-bold justify-center">
                F
                <Image
                  src="/flowLogo.png"
                  alt="logo"
                  width={15}
                  height={15}
                  className="cursor-pointer"
                />
                ow
              </div>
            </DrawerTitle>
            <DrawerDescription className="text-[#E2CBFF]">
              Automation Magic.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerClose>
            <div>
              <ul className="flex flex-col gap-2 items-center justify-center">
                {routes.map((route) => (
                  <li key={route.href} className="w-full flex justify-center">
                    <div
                      onClick={() => {
                        handleNavigation(route.href);
                      }}
                    >
                      <h1
                        className={cn(
                          "w-full text-center text-3xl font-normal",
                          pathname.startsWith(route.href) &&
                            "underline underline-offset-4",
                        )}
                      >
                        {route.route}
                      </h1>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </DrawerClose>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline" className="rounded-[100%] w-fit p-2">
                <XIcon />
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

const NavBar = () => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px] text-3xl font-bold">
        <p>F</p>
        <Image
          src="/flowLogo.png"
          alt="fuzzie logo"
          width={15}
          height={15}
          className="shadow-sm"
        />
        <p>ow</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-[1rem]">
          <li>
            <a href="/" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href={true ? "/dashboard" : "/"}
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {true ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        <MobileHamburgerMenu />
      </aside>
    </header>
  );
};

export default NavBar;
