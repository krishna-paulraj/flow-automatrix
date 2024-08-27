import React from "react";
import { LoadingComponent } from "../_components/loading";

const DashboardPage = () => {
  return (
    <>
      {false ? (
        <LoadingComponent />
      ) : (
        <div className="flex flex-col gap-4 overflow-scroll">
          <h1 className="sticky top-0 z-[9999] flex items-center justify-between border-b bg-background/50 text-4xl backdrop-blur-lg p-6">
            <span>Dashboard</span>
          </h1>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
