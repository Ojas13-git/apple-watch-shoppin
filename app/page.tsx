"use client";

import { useState } from "react";
import { WatchStudio } from "@/components/watch-studio";
import { WatchProvider } from "@/context/watch-context";
import Image from "next/image";

export default function Home() {
  const [showStudio, setShowStudio] = useState(false);

  const handleGetStarted = () => {
    setShowStudio(true);
  };

  if (showStudio) {
    return (
      <WatchProvider>
        <main className="min-h-screen bg-white">
          <WatchStudio />
        </main>
      </WatchProvider>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Logo */}
      <header className="p-6">
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
          alt="Logo"
          className="w-24" 
        />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col  items-center justify-between px-10 md:px-20 lg:px-40">
        
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <p className="text-4xl md:text-[21px] tracking-tight">
            Apple Watch Studio
          </p>
          <p className="text-lg md:text-6xl font-bold text-gray-700">
            Choose a case. <br />
            Pick a band. <br />
            Create your own style.
          </p>
          <button
            onClick={handleGetStarted}
            className="mt-4 px-8 py-4 bg-blue-600 text-white font-semibold text-md rounded-full hover:bg-blue transition"
          >
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0">
          <Image
            width={48}
            height={48}
            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
            alt="Apple Watch"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </section>
    </main>
  );
}
