import React from "react";
import { LoadingComponent } from "../_components/loading";

const WorkflowPage = () => {
  return (
    <>
      {false ? (
        <LoadingComponent />
      ) : (
        <div className="flex flex-col gap-4">
          <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 text-4xl backdrop-blur-lg p-6">
            <span>Workflows</span>
          </h1>
        </div>
      )}
    </>
  );
};

export default WorkflowPage;
