import React from "react";
import Image from "next/image";
import { GithubIcon, Instagram, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
const Footer = () => {
  return (
    <div className="mx-10">
      <div className="my-32 flex justify-between flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="flex items-center gap-[2px] text-3xl font-bold">
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
          <p className="text-[#E2CBFF]">Automation Magic</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 mt-14 md:mt-0">
          <h1 className="text-xl">Join Our Newsletter</h1>
          <div className="flex gap-2 justify-center items-center mt-3 md:mt-0">
            <Input
              placeholder="Email"
              type="email"
              className="w-[200px] p-2 rounded-lg"
            />
            <Button size={"sm"}>Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="border border-white opacity-50" />
      <div className="flex mx-auto gap-2 justify-center mt-32">
        <div className="border border-white w-fit p-2 rounded-full cursor-pointer opacity-50 hover:opacity-100 duration-100">
          <Instagram size={24} />
        </div>
        <div className="border border-white w-fit p-2 rounded-full cursor-pointer opacity-50 hover:opacity-100 duration-100">
          <TwitterIcon size={24} />
        </div>
        <div className="border border-white w-fit p-2 rounded-full cursor-pointer opacity-50 hover:opacity-100 duration-100">
          <LinkedinIcon size={24} />
        </div>
        <div className="border border-white w-fit p-2 rounded-full cursor-pointer opacity-50 hover:opacity-100 duration-100">
          <GithubIcon size={24} />
        </div>
      </div>
      <footer className="text-center text-white/70 p-4 mb-32">
        <p>&copy;2024 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
