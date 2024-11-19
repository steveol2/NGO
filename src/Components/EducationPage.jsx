import { Link } from "react-router-dom";

function HopePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center text-[#FA812F] mb-4">
        Inspiring Hope for a Brighter Future
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        Across Africa, many children face unimaginable hardships, from poverty
        and hunger to the lack of basic healthcare and education. These
        challenges can often seem insurmountable. However, at Kat Perry
        Foundation, we believe that every child deserves the chance to dream, to
        hope, and to build a brighter future.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Through our programs, we are not just offering immediate aid, but
        nurturing long-term hope by empowering children with the tools they need
        to overcome their circumstances—be it through access to education,
        healthcare, or life skills that can help them thrive.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Your support helps create a future filled with opportunities, where
        children are no longer defined by their hardships, but by their dreams.
      </p>

      {/* CTA Donate Button */}
      <div className="flex justify-center mt-6">
        <Link
          to="/donate"
          className="bg-[#FA812F] hover:bg-[#d96e26] text-white font-bold py-3 px-6 rounded shadow-lg transition duration-300"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
}

export default HopePage;
