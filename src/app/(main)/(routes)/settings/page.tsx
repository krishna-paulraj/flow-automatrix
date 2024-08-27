"use client";
import React from "react";
import PhotoUploadComponent from "./_components/Photo-upload";
import ProfileFormComponent from "@/components/forms/profile-form";

const SettingPage = () => {
  return (
    <div className="flex flex-col gap-4 max-h-[100vh] overflow-scroll">
      <h1 className="sticky top-0 z-[9000] flex items-center justify-between border-b bg-background/50 text-4xl backdrop-blur-lg p-6">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div className="">
          <h2 className="text-2xl font-bold">My Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <PhotoUploadComponent />
        <ProfileFormComponent />
      </div>
    </div>
  );
};

export default SettingPage;
