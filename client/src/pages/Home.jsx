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
      className="w-screen h-screen bg-slate-100 flex items-center justify-center flex-col "
      ref={homeRef}
    >
      <img src="./../public/koran.png" alt="" width={150} height={150} />
      <h1 className="text-4xl font-extrabold">Welcome to Al-Quran</h1>
      <p className="text-2xl font-semibold w-9/12 text-center">
        Easily find verses, explanations, and resources to deepen your
        understanding of the Quran's teachings.
      </p>
    </div>
  );
};

export default Home;
