import React, { useState, useRef } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I share food with others?",
      answer:
        "Simply create a listing by providing details about the food you want to share, including quantity, pick-up time, and location.",
    },
    {
      question: "Is it free to share food on the platform?",
      answer:
        "Yes, our platform allows you to share surplus food for free to reduce food waste and help others.",
    },
    {
      question: "How do I ensure the food is safe to share?",
      answer:
        "We recommend sharing food that is fresh, properly stored, and within safe consumption dates to ensure safety.",
    },
    {
      question: "Can I schedule recurring food donations?",
      answer:
        "Currently, our platform supports one-time listings, but recurring donations are a planned feature for future updates.",
    },
    {
      question: "What happens if nobody claims my food listing?",
      answer:
        "If no one claims your listing within the specified time, you can choose to relist it or safely dispose of the food.",
    },
  ];

  return (
    <section className="w-11/12 mx-auto mt-10 pb-6 font-sans bg-white dark:bg-[#1D232A] text-black dark:text-white transition-colors duration-300">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-5 gap-10 md:gap-12">

          {/* Left Section: Title & Description */}
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h2 className="text-3xl font-bold md:text-4xl leading-tight dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-gray-700 dark:text-gray-300 text-md md:text-lg">
                Answers to common questions about Food Share.
              </p>
            </div>
          </div>

          {/* Right Section: FAQ List */}
          <div className="md:col-span-3">
            <div className="divide-y divide-gray-300 dark:divide-gray-700">
              {faqs.map(({ question, answer }, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="py-4">
                    <button
                      onClick={() => toggle(index)}
                      className="group flex items-center justify-between w-full text-left md:text-lg font-semibold text-gray-800 dark:text-white focus:outline-none"
                      aria-expanded={isOpen}
                      aria-controls={`faq${index}`}
                    >
                      <span>{question}</span>
                      <svg
                        className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      id={`faq${index}`}
                      role="region"
                      aria-labelledby={`faq${index}`}
                      ref={(el) => (contentRefs.current[index] = el)}
                      style={{
                        maxHeight: isOpen
                          ? contentRefs.current[index]?.scrollHeight + "px"
                          : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.35s ease",
                      }}
                      className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base"
                    >
                      <p className="pl-1">{answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
