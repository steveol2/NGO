import { Link } from "react-router-dom";

function WorkPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center text-[#FA812F] mb-4">
        Our Work: Transforming Lives, One Child at a Time
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        At Kat Perry Foundation, we are driven by one mission: to end hunger and
        give every child in Africa the opportunity to thrive. Hunger is not just
        a physical absence of food—it strips children of their futures, robbing
        them of the energy to learn, play, and dream. For many children in
        Africa, hunger is a daily reality, one that forces them to choose
        between attending school and finding food.
      </p>

      <h6 className="font-bold text-xl mb-4">The Struggle</h6>
      <p className="text-lg text-gray-600 mb-6">
        In the rural corners of Africa, millions of children go to bed hungry,
        their stomachs empty while their hearts are full of hope. These children
        are often born into families with limited resources, where even the most
        basic needs like food and clean water are out of reach. It’s a cycle
        that seems impossible to break—until help arrives.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our story begins with the children who suffer the most. In villages
        where malnutrition runs rampant, we have been working tirelessly to
        provide the resources, care, and love that these children need to
        survive.
      </p>

      <h6 className="font-bold text-xl mb-4">What We Do</h6>
      <p className="text-lg text-gray-600 mb-6">
        We don’t just provide food; we provide hope, opportunity, and a future.
        Our efforts go beyond simply feeding children; we focus on sustainable
        solutions that will ensure long-term impact:
      </p>

      <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
        <li>
          Food Distribution: We deliver nutritious meals to children in remote
          areas, ensuring they have the energy to learn, grow, and play.
        </li>
        <li>
          Nutritional Support: We offer fortified foods and supplements to
          combat malnutrition, giving children the nutrients they need to build
          healthy bodies and minds.
        </li>
        <li>
          Community Empowerment: By working with local farmers, we teach
          sustainable agricultural practices, helping communities grow their own
          food and reducing dependency on aid.
        </li>
        <li>
          School Feeding Programs: We partner with schools to provide daily
          meals, ensuring that children have the fuel to succeed in their
          education, without worrying about their next meal.
        </li>
      </ul>

      <h6 className="font-bold text-xl mb-4">Stories of Change</h6>
      <p className="text-lg text-gray-600 mb-6">
        Meet Samuel, a 7-year-old boy from a small village in northern Kenya.
        Samuel was always tired, unable to concentrate in school or play with
        his friends. His family couldn’t afford to send him to school, and when
        they did, he had no energy to focus because of hunger.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        After joining our school feeding program, Samuel’s life changed. He now
        receives daily meals that nourish both his body and mind. Today, Samuel
        is a bright, energetic student, attending school regularly, and dreaming
        of becoming a teacher. His story is just one of many, but it highlights
        the power of nutrition and education combined.
      </p>

      <h6 className="font-bold text-xl mb-4">A Future of Hope</h6>
      <p className="text-lg text-gray-600 mb-6">
        Our work is far from over. Every day, more children face the harsh
        reality of hunger. But together, we are making a difference. We are
        building a future where no child goes to bed hungry, where every child
        has the chance to reach their full potential.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        We believe that no child should ever have to choose between food and
        education. By providing both, we are breaking the cycle of poverty and
        creating opportunities for future generations to thrive.
      </p>

      <h6 className="font-bold text-xl mb-4">How You Can Help</h6>
      <p className="text-lg text-gray-600 mb-6">
        You have the power to change a child's life. With your support, we can
        reach more communities, provide more meals, and offer more hope.
      </p>
      <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
        <li>$30 feeds a child for a month.</li>
        <li>$100 provides school meals for 10 children for a month.</li>
        <li>
          $500 helps build a community garden, ensuring sustainable food for
          future generations.
        </li>
      </ul>
      <p className="text-lg text-gray-600 mb-6">
        Every donation, no matter how small, contributes to creating a world
        where no child is hungry, and every child has the chance to learn and
        grow.
      </p>

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

export default WorkPage;
