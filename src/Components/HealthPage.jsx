import { Link } from "react-router-dom";

function HealthPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center text-[#FA812F] mb-4">
        Promoting Health and Well-being for Children in Africa: A Call to Action
      </h1>
      <p className="text-lg text-gray-600">
        In the heart of Africa, millions of children face daily battles against
        hunger, malnutrition, preventable diseases, and inadequate healthcare.
        For these vulnerable young lives, access to basic health services and
        proper nutrition is not just a necessity—it is a right that is far too
        often denied. At Kat Perry Foundation, we are committed to changing this
        narrative, one child at a time.
      </p>

      <h6 className="font-bold pt-3">The Crisis at Hand</h6>
      <p className="text-lg text-gray-600">
        The statistics are heartbreaking. According to UNICEF, sub-Saharan
        Africa accounts for more than half of the global under-five mortality
        rate. Many of these deaths are caused by preventable conditions such as
        diarrhea, pneumonia, malaria, and malnutrition. Behind these numbers are
        real stories of children who lack access to clean water, vaccinations,
        and even a simple meal to sustain them through the day. This crisis
        isn’t just about survival—it’s about quality of life. A child suffering
        from poor health cannot attend school, grow to their full potential, or
        dream of a better future. Poor health creates a cycle of poverty that
        continues to trap families and communities for generations.
      </p>

      <h6 className="font-bold pt-3">Our Vision</h6>
      <p className="text-lg text-gray-600">
        At Kat Perry Foundation, we envision a world where every child,
        regardless of their circumstances, can grow up healthy, happy, and full
        of hope. Our mission is clear: to promote health and well-being for
        children in Africa through targeted programs that address their most
        urgent needs.
      </p>

      <h6 className="font-bold pt-3">Our Mission</h6>
      <ul className="list-disc pl-6 text-lg text-gray-600">
        <li>Healthcare through mobile clinics and vaccination programs.</li>
        <li>
          Nutrition with feeding initiatives and education on sustainable
          farming.
        </li>
        <li>Clean Water by building wells and teaching hygiene practices.</li>
      </ul>

      <h6 className="font-bold p-3">A Story of Hope</h6>
      <img
        src="./Images/amina.jpg"
        alt="Hope"
        className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-4"
      />

      <p className="text-lg text-gray-600">
        Four-year-old Amina in Kenya was born underweight and unvaccinated.
        Through our program, she received care and nutritional support. Today,
        she’s thriving and attending school, a testament to what we can achieve
        together.
      </p>

      <h6 className="font-bold pt-3">Your Impact</h6>
      <ul className="list-disc pl-6 text-lg text-gray-600">
        <li>$25 vaccinates five children.</li>
        <li>$50 provides clean water for a family for a year.</li>
        <li>$100 funds a clinic for a week.</li>
      </ul>

      {/* CTA Donate Button */}
      <div className="flex justify-center mt-8">
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

export default HealthPage;
