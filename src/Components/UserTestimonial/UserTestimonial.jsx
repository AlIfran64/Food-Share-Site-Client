import { FaQuoteLeft } from "react-icons/fa";

const UserTestimonial = () => {
  return (
    <blockquote className="relative text-center max-w-5xl mx-auto px-6 py-12 my-32">
      {/* Quotation icon */}
      <FaQuoteLeft className="absolute -top-6 left-6 text-7xl opacity-20" />

      {/* Testimonial Text */}
      <p className="relative z-10 text-lg md:text-4xl leading-relaxed font-medium">
        <em>
          <span className="relative z-10">
            “This platform helped me share leftover food with a local shelter. It’s easy to use, meaningful, and truly impactful. Together, we’re reducing waste and feeding lives.”
          </span>
        </em>
      </p>

      {/* User Info (Optional) */}
      <footer className="mt-6 text-xl font-medium text-[#D8224E]">
        — Ayesha R., Community Contributor
      </footer>
    </blockquote>
  );
};

export default UserTestimonial;
