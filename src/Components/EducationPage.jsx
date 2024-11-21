import { Link } from "react-router-dom";

function EducationPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center text-[#FA812F] mb-4">
        Empowering Education for Every Child
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        In many parts of Africa, countless children are deprived of basic
        education due to poverty, conflict, and lack of resources. This deprives
        them of the chance to learn, grow, and unlock their potential.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        At Kat Perry Foundation, we believe that education is the most powerful
        tool to break the cycle of poverty. We are dedicated to providing
        underprivileged children with access to quality education, school
        supplies, and supportive learning environments.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        By equipping children with knowledge and skills, we empower them to
        dream bigger, achieve more, and contribute to their communities.
        Together, we can create a future where no child is left behind.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Your contribution helps us build schools, train teachers, and provide
        the resources needed to shape a generation of empowered, educated young
        minds.
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

export default EducationPage;
