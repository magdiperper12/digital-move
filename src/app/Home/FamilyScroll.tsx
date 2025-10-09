"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface TestimonialItem {
  id: number;
  image: string;
  name: string;
  role: string;
  review: string;
  rating: number;
}

interface Partner {
  icon: string;
  text: string;
}

const renderStars = (rating: number) =>
  Array.from({ length: 5 }, (_, i) => {
    const index = i + 1;
    if (rating >= index)
      return <FaStar key={index} className="text-[#f0ad4e] text-lg" />;
    if (rating >= index - 0.5)
      return <FaStarHalfAlt key={index} className="text-[#f0ad4e] text-lg" />;
    return <FaRegStar key={index} className="text-[#f0ad4e] text-lg" />;
  });

const InfiniteMarquee: React.FC = () => {
  // ✅ Partners Section Data
  const infinitData = useMemo<Partner[]>(
    () => [
      { icon: "/images/partners/google.png", text: "Google" },
      { icon: "/images/partners/microsoft.png", text: "Microsoft" },
      { icon: "/images/partners/amazon.png", text: "Amazon" },
      { icon: "/images/partners/facebook.png", text: "Meta" },
      { icon: "/images/partners/netflix.png", text: "Netflix" },
      { icon: "/images/partners/shopify.png", text: "Shopify" },
    ],
    []
  );

  // ✅ Testimonials Data
  const testimonials: TestimonialItem[] = useMemo(
    () => [
      {
        id: 1,
        image: "/image/image.jpg",
        name: "Sarah Johnson",
        role: "Marketing Manager - Google",
        review:
          "Working with this team was an absolute pleasure. They delivered the project on time with outstanding quality.",
        rating: 4.5,
      },
      {
        id: 2,
        image: "/image/image.jpg",
        name: "Ahmed Ali",
        role: "Frontend Developer - Microsoft",
        review:
          "The attention to detail and design aesthetics were impressive. Highly recommended!",
        rating: 5,
      },
      {
        id: 3,
        image: "/image/image.jpg",
        name: "Emily Davis",
        role: "Product Owner - Shopify",
        review:
          "Great communication and excellent results. They understood our needs perfectly.",
        rating: 4,
      },
      {
        id: 4,
        image: "/image/image.jpg",
        name: "Mohamed Hassan",
        role: "CTO - StartupX",
        review:
          "The project exceeded expectations, both in performance and UI/UX quality.",
        rating: 4.8,
      },
    ],
    []
  );

  const marqueeRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, [infinitData]);

  return (
    <div className="text-center -mt-56  text-white  " dir="ltr">
      {/* Section Title */}
      <div className="w-full m-auto  ">
        <h1 className="text-xl md:text-4xl font-extrabold mb-8"></h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-6xl md:text-7xl text-blue-50 font-extrabold mb-16 text-center"
        >
          WHAT OUR CLIENT <span className="text-blue-500">SAY</span>
          <span className="text-blue-500">.</span>
        </motion.h2>
      </div>

      {/* Testimonials Marquee */}
      <div className="w-full overflow-hidden   mt-4  dark:border-y-2 border-y-darkthird py-8">
        <motion.div
          ref={marqueeRef}
          className="flex whitespace-nowrap gap-10 text-primary dark:text-secoundry text-lg font-medium"
          animate={{ x: [0, -width] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // أبطأ شوية
              ease: "linear",
            },
          }}
        >
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div
              key={item.id + "-" + idx}
              className="bg-[#00004e]  overflow-hidden w-[500px] h-[250px] scale-90 md:scale-100 shadow-lg p-6 rounded-2xl flex-shrink-0"
            >
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div className="text-left">
                  <div className="text-[22px] text-white font-semibold mb-1">
                    {item.name}
                  </div>
                  <div className="text-xs text-blue-200 text-wrap">
                    {item.role}
                  </div>
                </div>
              </div>

              <div className="flex mb-2 space-x-1 ">
                {renderStars(item.rating)}
              </div>

              <p className="text-[18px] text-[#b4fffd] text-wrap">{item.review}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Partners Logos Row */}
      <div className="flex justify-center gap-12 mt-12 flex-wrap">
        {infinitData.map((partner, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* <Image
              src={partner.icon}
              alt={partner.text}
              width={80}
              height={80}
              className="object-contain"
            /> */}
            <span className="text-sm text-gray-400 mt-2">{partner.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
