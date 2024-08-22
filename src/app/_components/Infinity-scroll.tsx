import { InfiniteMovingCards } from "@/components/global/infinite-scroll";
import React from "react";
const paths = [...Array(10)].map((val, i) => `/${i + 1}.png`);
const InfinityScrollComponent = () => {
  return (
    <div>
      <InfiniteMovingCards items={paths} />
    </div>
  );
};

export default InfinityScrollComponent;
