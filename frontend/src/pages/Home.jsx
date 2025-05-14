import Collections from "@/reusable/components/Collections";
import MainBanner from "@/reusable/components/MainBanner";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-between">
        <MainBanner />
      </div>
      <Collections />
    </div>
  );
};

export default Home;
