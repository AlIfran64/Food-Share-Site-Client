import React from 'react';
import CountUp from 'react-countup';
import meal from '../../../src/assets/images/meals.png';
import donor from '../../../src/assets/images/donor.png';
import family from '../../../src/assets/images/family.png';
import localarea from '../../../src/assets/images/localarea.png';

const Statistics = () => {
  return (
    <div className="bg-[url('../../../src/assets/images/statsbg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="bg-[#D9224E]/80 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white font-extrabold text-3xl md:text-4xl text-center">Our Impact in Numbers</h1>
          <p className="text-white text-center text-sm md:text-md lg:text-lg mt-3 mb-10">
            We believe in data-driven change. Here’s how our community is making a real difference.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <img className="w-14 mb-4 p-2" src={meal} alt="Meals Shared" />
              <p className="text-white text-4xl md:text-5xl font-bold mb-1">
                <CountUp end={15000} duration={2.5} separator="," enableScrollSpy={true} />+
              </p>
              <p className="text-white text-md md:text-lg">Meals Shared</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <img className="w-14 mb-4 p-2 transform scale-130" src={donor} alt="Active Donors" />
              <p className="text-white text-4xl md:text-5xl font-bold mb-1">
                <CountUp end={3200} duration={2.5} separator="," enableScrollSpy={true} />+
              </p>
              <p className="text-white text-md md:text-lg">Active Donors</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <img className="w-14 mb-4 p-2" src={family} alt="Families Supported" />
              <p className="text-white text-4xl md:text-5xl font-bold mb-1">
                <CountUp end={1800} duration={2.5} separator="," enableScrollSpy={true} />+
              </p>
              <p className="text-white text-md md:text-lg">Families Supported</p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <img className="w-14 mb-4 p-2" src={localarea} alt="Areas Covered" />
              <p className="text-white text-4xl md:text-5xl font-bold mb-1">
                <CountUp end={40} duration={2} enableScrollSpy={true} />+
              </p>
              <p className="text-white text-md md:text-lg">Local Areas Covered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
