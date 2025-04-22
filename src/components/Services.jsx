import React from 'react';
import { FiAirplay, FiShoppingCart, FiTruck, FiClipboard, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
        <p className="text-lg text-gray-700 mb-8">
          We are a dynamic organization offering comprehensive solutions across various sectors, including:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FiAirplay size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">International Trading & General Logistics</h3>
            <p className="text-gray-700">
              We facilitate efficient international trade and logistics, ensuring timely and reliable deliveries worldwide.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FiShoppingCart size={40} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Procurement and Supplies</h3>
            <p className="text-gray-700">
              Our procurement services streamline the acquisition of goods, ensuring quality and cost-effective solutions for our clients.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FiTruck size={40} className="text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Distribution of General Goods</h3>
            <p className="text-gray-700">
              We provide efficient distribution services, ensuring your products reach their destinations on time and in perfect condition.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FiClipboard size={40} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Good Management Consulting</h3>
            <p className="text-gray-700">
              Our consulting services help businesses optimize their management practices, driving growth and enhancing productivity.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FiUsers size={40} className="text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Human Resource Development</h3>
            <p className="text-gray-700">
              We provide HR development solutions to enhance your workforce's capabilities, fostering growth and organizational success.
            </p>
          </motion.div>
        </div>
        <p className="text-lg text-gray-700 mt-8">
          Our team of experts is committed to delivering tailored solutions that drive efficiency, growth, and sustainable development for businesses around the globe.
        </p>
      </div>
    </section>
  );
};

export default Services;
