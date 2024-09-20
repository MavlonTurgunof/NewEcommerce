import Link from "next/link";
import React, { useState, useEffect } from "react";

const images = ["/Img/Header.jpg", "/Img/Header2.webp", "/Img/Header3.jpg"];

function OverviewHeader() {
  const [currentImage, setCurrentImage] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setOpacity(1);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative container mx-auto h-[500px] lg:h-[700px] w-auto bg-cover bg-center flex items-center justify-start`}
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        transition: "opacity 0.5s ease-in-out",
        opacity: opacity,
      }}
    >
      <div className="absolute top-[50%] transform -translate-y-1/2 text-left left-[8%]">
        <h3 className="text-4xl bg-gradient-to-b from-[#000000] to-[#999999] bg-clip-text text-transparent md:text-5xl lg:text-8xl font-bold pb-24">
          Feel
          <br /> Confident <br /> Every Day
        </h3>
        <Link className="bg-black px-7 py-5 rounded-xl" href="/collection">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default OverviewHeader;
