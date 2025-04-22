import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Banner Section */}
      <div className="w-full mt-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6 md:px-12">
          {/* Banner Image */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/img/banner.png"
              alt="Company Banner"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          {/* Banner Text */}
          <motion.div
            className="text-center md:text-left space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold text-blue-800">Chizo_U International Ltd</h1>
            <p className="text-lg">
              Empowering global businesses through excellence in trade, logistics, procurement, and professional development.
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        {/* Stylish About Us Title */}
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-black">About</span>{' '}
          <span className="text-cyan-800">Us</span>
        </motion.h2>

        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          We are a dynamic organization offering comprehensive solutions across various sectors, including:
        </motion.p>

        <motion.ul
          className="list-disc list-inside text-left text-md mb-6 space-y-2 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <li>International Trading & General Logistics</li>
          <li>Procurement and Supplies</li>
          <li>Distribution of General Goods</li>
          <li>Good Management Consulting</li>
          <li>Human Resource Development</li>
        </motion.ul>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our team of experts is committed to delivering tailored solutions that drive efficiency, growth, and sustainable development for businesses around the globe.
        </motion.p>

        <motion.a
          href="/services"
          className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Explore Our Services
        </motion.a>
      </div>
    </div>
  );
};

export default About;
