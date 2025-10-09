"use client";

import { motion } from "framer-motion";

const Services = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // يخلي كل عنصر يتأخر 0.2 ثانية عن اللي قبله
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 }, // يجي من الشمال
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-full z-50 text-white px-8 mb-52 -mt-32 py-12 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
        {/* Services Section */}
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wider">
            SERVICES<span className="text-indigo-400">.</span>
          </h2>

          {/* Animated List */}
          <motion.ul
            className="space-y-2 text-lg text-gray-300"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // يبدأ لما 20% من العنصر يظهر
          >
            {[
              "Website Design",
              "E-Commerce",
              "SaaS Development",
              "Front-end Development",
              "Back-end Development",
              "Website Support",
              "Social Media Advertising",
              "SEO",
            ].map((service, index) => (
              <motion.li key={index} variants={itemVariants}>
                {service}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
