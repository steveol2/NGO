import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-hero-pattern bg-cover bg-center w-full h-screen flex flex-col items-center justify-center text-white px-4 text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold leading-tight text-shadow-lg tracking-wide mb-6">
          Every Child Deserves a Chance
          <br />
          <span className="text-[#FAB12F]">Join Us in Making a Difference</span>
        </h3>
        <Link
          to="/donate"
          className="bg-[#FA812F] hover:bg-[#d96e26] text-white font-bold py-3 px-6 rounded shadow-lg transition duration-300"
        >
          Donate Now
        </Link>
      </div>

      {/* New Section Without Background Image */}
      <div className="w-full py-32 px-4 bg-[#f1f1f1] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FA812F] mb-4">
          What We Do.
        </h2>
        <p className="text-lg md:text-xl text-[#666] mb-6">
          Empowering the Next Generation: Providing Education, Health, and Hope
          to Children Across Africa.
        </p>

        {/* Image and Text Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-12 mt-8">
          <div className="flex flex-col items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto">
            <img
              src="/Images/health.jpg"
              alt="Health"
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
            <Link
              to="/health"
              className="text-md md:text-lg font-semibold hover:underline"
            >
              Promoting Health and Well-being
            </Link>
          </div>

          <div className="flex flex-col items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto">
            <img
              src="/Images/edu.jpg"
              alt="Education"
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
            <Link
              to="/education"
              className="text-md md:text-lg font-semibold hover:underline"
            >
              Providing Quality Education to Every Child
            </Link>
          </div>

          <div className="flex flex-col items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto">
            <img
              src="/Images/hope.png"
              alt="Hope"
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
            <Link
              to="/hope"
              className="text-md md:text-lg font-semibold hover:underline"
            >
              Inspiring Hope for a Brighter Future
            </Link>
          </div>
        </div>

        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-14 px-4">
          <div className="w-full lg:w-1/2 mt-12">
            <img
              src="/Images/about.jpg" // Make sure to update this with the correct image URL
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="text-3xl font-bold text-[#FA812F] mb-4">About Us</h1>
            <p className="text-lg text-[#666] mb-6">
              At Marley Foundation, our mission is to provide children in need
              with life-changing support, from emergency food assistance to
              education and healthcare. We believe every child deserves a chance
              to grow, learn, and thrive. Join us in making a lasting impact on
              their future.
            </p>
            <Link
              to="/ourWork"
              className="text-md md:text-lg font-semibold text-[#FA812F] hover:underline"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>

      <div>
        <ContactForm />
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <h2 className="text-2xl font-bold text-[#FAB12F] mb-4 text-center lg:text-left">
                Get in Touch
              </h2>
              <p className="text-lg text-center lg:text-left">
                Email us at{" "}
                <a href="mailto:contact@ngo.org" className="text-[#FAB12F]">
                  contact@ngo.org
                </a>
                <br />
                Phone: +1 (627) 091-824
              </p>
            </div>

            {/* Quick Links and Social Media */}
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-8 w-full lg:w-2/3">
              <div className="text-center lg:text-left w-full lg:w-1/3">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/ourWork"
                      className="text-lg text-[#FAB12F] hover:underline"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-lg text-[#FAB12F] hover:underline"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/donate"
                      className="text-lg text-[#FAB12F] hover:underline"
                    >
                      Donate
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
