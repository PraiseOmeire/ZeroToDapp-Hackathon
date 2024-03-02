"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ImageGallery from "~~/components/ImageGallery";
import Modal from "~~/components/Modal";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleImageClick = (imageName: any) => {
    setSelectedImageData(imageName);
    setModalOpen(true);
  };

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
      <ImageGallery images={images} handleImageClick={handleImageClick} />
    </>
  );
};

export default Home;
