import React from 'react';
import Marquee from 'react-fast-marquee';
import hunger from '../../../src/assets/images/action against hunger.png';
import fao from '../../../src/assets/images/fao.png';
import global from '../../../src/assets/images/global food bank.png';
import share from '../../../src/assets/images/share the meal.png';
import wfp from '../../../src/assets/images/wfp.png';

const OurPartners = () => {
  const logos = [
    { src: hunger, alt: "Action Against Hunger Logo" },
    { src: fao, alt: "FAO Logo" },
    { src: global, alt: "Global Food Bank Logo" },
    { src: share, alt: "Share The Meal Logo" },
    { src: wfp, alt: "World Food Programme Logo" },
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-[#21272e] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Our Trusted Partners
        </h2>

        <p className="text-base sm:text-lg dark:text-gray-400 mt-4 max-w-xl mx-auto">
          We collaborate with leading organizations dedicated to fighting hunger and promoting food security worldwide.
        </p>

        <div className="rounded-lg bg-white dark:bg-[#27303F] shadow-lg p-6 mt-10">
          <Marquee
            speed={60}
            gradient={true}
            gradientColor={[29, 35, 42]}
            pauseOnHover={true}
            className="max-w-full"
          >
            <div className="flex items-center space-x-10 md:space-x-16 lg:space-x-20 px-4">
              {[...logos, ...logos].map(({ src, alt }, index) => (
                <img
                  key={index}
                  src={src}
                  alt={alt}
                  className="h-12 md:h-20 lg:h-24 cursor-pointer filter grayscale  transition transform duration-300 ease-in-out
                             dark:filter dark:brightness-0 dark:invert"
                  style={{ margin: '0 16px' }}
                  loading="lazy"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
