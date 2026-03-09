import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0f] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-10">
          Contact Me
        </h1>

        <p className="text-gray-400 mb-12">
          If you'd like to collaborate, discuss a project, or just say hello,
          feel free to send a message.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-[#111118] border border-purple-900/40 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-[#111118] border border-purple-900/40 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full bg-[#111118] border border-purple-900/40 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;