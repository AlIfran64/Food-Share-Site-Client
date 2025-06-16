import React from 'react';
import hunger from '../../../src/assets/images/action against hunger.png';
import fao from '../../../src/assets/images/fao.png';
import global from '../../../src/assets/images/global food bank.png';
import share from '../../../src/assets/images/share the meal.png';
import wfp from '../../../src/assets/images/wfp.png';

const OurPartners = () => {
  return (
    <marquee behavior="scroll" direction="left" scrollamount="10" className="py-10">
      <div className="flex items-center justify-between gap-10">
        {[hunger, fao, global, share, wfp].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="partner logo"
            className="lg:h-20 h-10 md:h-15 grayscale"
          />
        ))}
      </div>
    </marquee>
  );
};

export default OurPartners;
