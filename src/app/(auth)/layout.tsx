import React from "react";
import Navbar from "@/components/global/Navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="jkkjkjk"></div>
      <div className="jkkjkjk"></div>
      <div></div>
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;
