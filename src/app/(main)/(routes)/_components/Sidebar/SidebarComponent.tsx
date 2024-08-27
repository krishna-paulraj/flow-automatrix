"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

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
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { dashboardRoutes } from "@/lib/constants";
import { usePathname, useRouter } from "next/navigation";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-full px-4 py-4 hidden  md:flex md:flex-col bg-neutral-100 dark:bg-black w-[300px] flex-shrink-0",
          className,
        )}
        animate={{
          width: animate ? (open ? "300px" : "60px") : "300px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div
        className={cn(
          "h-15 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-black w-full",
        )}
        {...props}
      >
        <Link
          href={"/"}
          className="flex items-center gap-[2px] text-3xl font-bold"
        >
          <p>F</p>
          <Image
            src="/flowLogo.png"
            alt="fuzzie logo"
            width={15}
            height={15}
            className="shadow-sm"
          />
          <p>ow</p>
        </Link>
        <Drawer>
          <DrawerTrigger asChild>
            <div className="flex justify-end z-20 w-full">
              <IconMenu2 className="text-neutral-800 dark:text-neutral-200" />
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
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
              <div>
                <ul className="flex flex-col gap-2 items-center justify-center ml-[35%]">
                  {dashboardRoutes.map((route) => (
                    <li key={route.href} className="w-full flex justify-start">
                      <DrawerClose>
                        <div
                          onClick={() => {
                            handleNavigation(route.href);
                          }}
                          className={cn(
                            "flex items-center gap-2",
                            pathname.startsWith(route.href) && "",
                          )}
                        >
                          {route.icon && (
                            <route.icon className="text-[#c597ff]" />
                          )}
                          <h1 className="w-full text-center text-xl font-normal hover:text-[#c597ff]">
                            {route.label}
                          </h1>
                          <div
                            className={cn(
                              pathname.startsWith(route.href) &&
                                "rounded-[100%] bg-white/[0.7] h-1 w-1 p-1",
                            )}
                          />
                        </div>
                      </DrawerClose>
                    </li>
                  ))}
                </ul>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button
                    variant="outline"
                    className="mx-auto border rounded-[100%] w-fit p-2"
                  >
                    <XIcon />
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-2  group/sidebar py-2",
        className,
      )}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
