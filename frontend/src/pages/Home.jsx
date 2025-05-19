import BestSellers from "@/reusable/components/BestSellers";
import Collections from "@/reusable/components/Collections";
import MainBanner from "@/reusable/components/MainBanner";
import NewsletterSection from "@/reusable/components/NewsLetterSection";
import WhyWeAreBest from "@/reusable/components/WhyWeAreBest";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-between">
        <MainBanner />
      </div>
      <Collections />
      <BestSellers />
      <WhyWeAreBest />
      <NewsletterSection />
    </div>
  );
};

export default Home;
