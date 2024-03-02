"use client";

import React from "react";
import type { NextPage } from "next";
import ImageGallery from "~~/components/ImageGallery";

const Home: NextPage = () => {
  const images = [
    ,
    "anime4.png",
    "brandon-salabarria-F-amCj7GBXE-unsplash.jpg",
    "ryan-yao-VURwPtZqyF4-unsplash.jpg",

    "anime3.jpeg",
    "anime2.png",
    "z-graphica-0JaTMyifxz0-unsplash.jpg",
    "scott-gummerson-_5Q1-ae44aw-unsplash.jpg",
    "anime5.jpeg",
    "anime1.jpeg",
  ];

  return (
    <>
      <ImageGallery images={images} />
    </>
  );
};

export default Home;
