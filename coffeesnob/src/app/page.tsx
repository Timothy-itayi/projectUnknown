"use client";

import React from "react";
import { Tabs } from "@/components/Tabs";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";

const Home = () => {
  const tabs = [
    {
      title: "Explore Cafes",
      value: "explore-cafes",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
          <p>New Zealand Cafes</p>
          <Cafes />
    
        </div>
      ),
    },
    {
      title: "Coffee",
      value: "coffee",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
          <p>Coffee tab</p>
          <div className="flex flex-row items-start">
            <DummyContent />
            <p className="ml-4 flex-1 text-white">
              This is some text placed alongside the image. You can write about the coffee, its origins, flavors, and any other relevant information here.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="container mx-auto mt-[-50px]">
        <div className="h-[40rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-8 md:my-40">
          <Tabs tabs={tabs} />
        </div>
        <footer className="text-center pt-2 bg-gray-800">
          <p className="text-white">
            &copy; {new Date().getFullYear()} CoffeeSnob. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;

const DummyContent: React.FC = () => {
  return (
    <Image
      src="/test.JPG"
      alt="dummy image"
      width="500"
      height="500"
    />
  );
};

const Cafes: React.FC = () => {
  return (
    <BlogCard
      imageUrls={[
        "/test2.jpeg",
        "/test2.jpeg",
        "/test2.jpeg",
        "/test2.jpeg",
      ]}
      title="Hamilton Gardens"
      description=""
    />
  );
};
