import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Home = () => {
  const homeRef = useRef();
  useGSAP(() => {
    gsap.from(homeRef.current.children, {
      y: 150,
      stagger: 0.15,
      duration: 0.7,
      ease: "power1.inOut",
      opacity: 0,
    });
  }, []);
  return (
    <div
      className="w-screen h-screen bg-slate-100 flex items-center justify-center flex-col gap-y-5"
      ref={homeRef}
    >
      <img src="/koran.png" alt="" width={150} height={150} />
      <h1 className="text-4xl font-extrabold max-sm:text-3xl">
        Welcome to Al-Quran
      </h1>
      <p className="text-2xl font-semibold w-9/12 text-center max-md:text-xl max-sm:text-lg">
        Discover chapter-wise Quran study with Latin translations and 5 distinct
        reciters in our app. Juz-wise views provide a uniform Arabic translation
        with one reciter, ensuring clear and focused recitation.
      </p>
    </div>
  );
};

export default Home;
