import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookMessenger, FaInstagram, FaTelegram } from 'react-icons/fa';
import { socialPlatforms } from '../data/data';

const iconMap = {
  FaWhatsapp: FaWhatsapp,
  FaFacebookMessenger: FaFacebookMessenger,
  FaInstagram: FaInstagram,
  FaTelegram: FaTelegram,
};

const SocialPlatforms = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState(null);

  const handlePlatformClick = (platform) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile ? platform.appUrl : platform.webUrl;
    window.open(url, '_blank');
  };

  return (
    <section id="platforms" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Connect Your <span className="text-gradient">Platforms</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate with all major messaging platforms in just one click
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialPlatforms.map((platform, index) => {
            const Icon = iconMap[platform.icon];
            
            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredPlatform(platform.id)}
                onHoverEnd={() => setHoveredPlatform(null)}
                onClick={() => handlePlatformClick(platform)}
                className="relative group cursor-pointer"
              >
                <div className="card text-center relative overflow-hidden">
                  {/* Hover Effect Background */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredPlatform === platform.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 opacity-10 rounded-xl"
                    style={{ backgroundColor: platform.color }}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto w-24 h-24 mb-6 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: `${platform.color}15` }}
                  >
                    <Icon
                      size={48}
                      style={{ color: platform.color }}
                    />
                  </motion.div>

                  {/* Platform Name */}
                  <h3 className="text-2xl font-bold mb-2" style={{ color: platform.color }}>
                    {platform.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">
                    {platform.description}
                  </p>

                  {/* Connect Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-lg font-semibold text-white transition-all"
                    style={{ backgroundColor: platform.color }}
                  >
                    Connect Now
                  </motion.button>

                  {/* Tooltip */}
                  {hoveredPlatform === platform.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap"
                    >
                      Click to open {platform.name}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                        <div className="border-8 border-transparent border-t-gray-900"></div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary to-secondary p-6 rounded-2xl text-white">
            <p className="text-lg font-semibold">
              💡 Tip: On mobile devices, clicking will open the app directly. On desktop, it opens the web version.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialPlatforms;
