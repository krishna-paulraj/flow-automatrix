import React from "react";
import { SidebarComponent } from "./(routes)/_components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Automate your app with Flow",
  icons: {
    icon: "/flowLogo.png",
  },
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-8xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen">
      <SidebarComponent />
      <div className="flex w-full">
        <div className="rounded-xl md:rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black/[0.5] flex flex-col gap-2 flex-1 w-full h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
