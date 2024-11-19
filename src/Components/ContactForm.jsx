import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // For demonstration purposes, just logging the form data
    console.log(formData);

    // Set form submission status to true
    setIsSubmitted(true);

    // Reset form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f1f1f1] px-4">
      <div className="w-full lg:w-2/3 xl:w-1/2 py-16 px-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-[#FA812F] mb-6">Get in Touch</h2>
        <p className="text-lg text-[#666] mb-8">
          Have any questions or want to learn more about how you can help? Fill
          out the form below and we’ll get back to you as soon as possible.
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-left font-semibold text-[#333] mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FA812F]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-left font-semibold text-[#333] mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FA812F]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-left font-semibold text-[#333] mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FA812F]"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FA812F] hover:bg-[#d96e26] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Confirmation Message */}
        {isSubmitted && (
          <p className="text-green-500 mt-6">
            Thank you for reaching out! We'll get back to you soon.
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
