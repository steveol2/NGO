function DonatePage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-[#FA812F] mb-6">
        Make a Difference: Donate Today
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Your support can transform lives. Every contribution helps us bring
        health, hope, and happiness to children in need across Africa.
      </p>

      {/* Donation Options */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Choose an Amount
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <button className="bg-[#FA812F] text-white font-bold py-2 px-4 rounded hover:bg-[#d96e26] transition">
            $25
          </button>
          <button className="bg-[#FA812F] text-white font-bold py-2 px-4 rounded hover:bg-[#d96e26] transition">
            $50
          </button>
          <button className="bg-[#FA812F] text-white font-bold py-2 px-4 rounded hover:bg-[#d96e26] transition">
            $100
          </button>
          <button className="bg-[#FA812F] text-white font-bold py-2 px-4 rounded hover:bg-[#d96e26] transition">
            $250
          </button>
        </div>

        {/* Custom Amount */}
        <div className="mt-6">
          <label
            htmlFor="customAmount"
            className="block text-gray-700 font-medium mb-2"
          >
            Enter a Custom Amount
          </label>
          <input
            type="number"
            id="customAmount"
            placeholder="Enter amount in USD"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FA812F] transition"
          />
        </div>

        {/* Payment Information */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Payment Details
        </h2>
        <form>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FA812F] transition"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FA812F] transition"
              required
            />
            <input
              type="text"
              placeholder="Card Number"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FA812F] transition"
              required
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FA812F] transition"
              required
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="CVV"
              className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FA812F] transition"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-[#FA812F] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#d96e26] shadow-lg transition duration-300"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DonatePage;
