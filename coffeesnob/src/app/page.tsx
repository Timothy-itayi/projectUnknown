"use client";

import React from "react";
import { Tabs } from "@/components/Tabs";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { Cardo } from "next/font/google";

const Home = () => {
  const tabs = [
    {
      title: "Explore Cafes",
      value: "explore-cafes",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
          <p>New Zealand Cafes</p>
         <Cafes/>
        </div>
      ),
    },
    {
      title: "Coffee",
      value: "coffee",
      content: (
        <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-black ">
          <p>Coffee tab</p>
          <DummyContent/>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="h-[40rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-8 md:my-40">
        <Tabs tabs={tabs} />
      </div>
      <footer className="text-center pt-2 bg-gray-800">
        <p className="text-white">
          &copy; {new Date().getFullYear()} CoffeeSnob. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Home;

const DummyContent = () => {
  return (
    <Image
      src="/test.JPG"
      alt="dummy image"
      width="500"
      height="500"
  />
  );
};

const Cafes = () => {
  return (
  <BlogCard

    imageUrls={[
      "/test2.jpeg",
      "/test2.jpeg",
      "/test2.jpeg",
      "/test2.jpeg",

    ]}
    title="hamilton Gardens"
    description=""
    />
  
  )
}