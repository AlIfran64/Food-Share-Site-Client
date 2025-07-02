import { FaQuoteLeft } from "react-icons/fa";

const UserTestimonial = () => {
  return (
    <blockquote className="relative text-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-20 my-20 bg-white dark:bg-[#1D232A] text-black dark:text-white rounded-xl transition-colors duration-300">

      {/* Quotation icon */}
      <FaQuoteLeft className="absolute -top-4 left-4 text-5xl md:text-7xl opacity-10 dark:opacity-20" />

      {/* Testimonial Text */}
      <p className="relative z-10 text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed font-medium">
        <em>
          <span className="relative font-semibold">
            “This platform helped me share leftover food with a local shelter. It’s easy to use, meaningful, and truly impactful. Together, we’re reducing waste and feeding lives.”
          </span>
        </em>
      </p>

      {/* User Info */}
      <footer className="mt-6 text-sm sm:text-base md:text-xl font-medium text-gray-600 dark:text-gray-400">
        — Ayesha R., Community Contributor
      </footer>
    </blockquote>
  );
};

export default UserTestimonial;
