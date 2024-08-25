"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconUpload } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PhotoUploadComponent = () => {
  const [photo, setPhoto] = useState<File>();

  const handleFileUpload = (photo: File[]) => {
    setPhoto(photo[0]);
    console.log(photo);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    onDrop: handleFileUpload,
  });

  const mainVariant = {
    initial: {
      x: 0,
      y: 0,
    },
    animate: {
      x: 20,
      y: -20,
      opacity: 0.9,
    },
  };

  const secondaryVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  function GridPattern() {
    const columns = 41;
    const rows = 11;
    return (
      <div className="flex bg-gray-100 dark:bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px scale-105">
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: columns }).map((_, col) => {
            const index = row * columns + col;
            return (
              <div
                key={`${col}-${row}`}
                className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${
                  index % 2 === 0
                    ? "bg-gray-50 dark:bg-neutral-950"
                    : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
                }`}
              />
            );
          }),
        )}
      </div>
    );
  }

  return (
    <div className="relative flex flex-col-reverse md:flex-row w-full p-8 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-white rounded-lg">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <GridPattern />
      </div>
      <div
        {...getRootProps()}
        className="relative flex justify-center items-center w-full z-20"
      >
        <motion.div
          whileHover={"animate"}
          className="relative w-full my-10 max-w-xl mx-auto"
        >
          <input {...getInputProps()} />
          <motion.div
            layoutId="file-upload"
            variants={mainVariant}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className={cn(
              "relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md",
              "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]",
            )}
          >
            {isDragActive ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-neutral-600 flex flex-col items-center"
              >
                Drop it
                <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
              </motion.p>
            ) : (
              <IconUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
            )}
          </motion.div>
          <motion.div
            variants={secondaryVariant}
            className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md"
          ></motion.div>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Avatar className="h-24 w-24">
          <AvatarImage
            src={photo ? URL.createObjectURL(photo) : ""}
            alt="Profile Photo"
          />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default PhotoUploadComponent;
