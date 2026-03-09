import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const message = `*New Contact Form Submission*%0a%0a*Name:* ${formData.name}%0a*Email:* ${formData.email}%0a*Message:* ${formData.message}`;
    
    // WhatsApp API URL with your number
    const whatsappUrl = `https://wa.me/916201063766?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
    
    // Clear status after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const contactInfo = [
    {
      icon: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2",
      label: "Email",
      value: "jitukumar63766@gmail.com",
      link: "mailto:jitukumar63766@gmail.com",
      color: "from-purple-600 to-purple-400"
    },
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      label: "Phone",
      value: "+91 62010 66376",
      link: "tel:+916201063766",
      color: "from-green-600 to-green-400"
    },
    {
      icon: "M22 16.92v3a1.999 1.999 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8 10a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z",
      label: "WhatsApp",
      value: "+91 62010 66376",
      link: "https://wa.me/916201063766",
      color: "from-green-500 to-green-400"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
      href: "https://github.com/jitu0210",
      username: "@jitu0210",
      color: "hover:bg-gray-800"
    },
    {
      name: "LinkedIn",
      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
      href: "https://linkedin.com/in/jitukumar0210",
      username: "jitukumar0210",
      color: "hover:bg-blue-600"
    },
    {
      name: "Twitter",
      icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
      href: "https://twitter.com/jitu0210",
      username: "@jitu0210",
      color: "hover:bg-sky-500"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#030014] text-white px-4 sm:px-6 py-20 pt-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400/20 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400/20 rounded-full animate-float-slow" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, purple 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Decorative header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
          <span className="text-purple-400 font-mono text-sm tracking-wider">GET IN TOUCH</span>
        </div>

        {/* Title with animation */}
        <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
              Contact Me
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-12">
            If you'd like to collaborate, discuss a project, or just say hello,
            feel free to send a message or reach out through any of these channels.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-[#111118] to-[#1a1a24] p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/20"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/10 group-hover:to-purple-400/10 rounded-2xl transition-all duration-500" />
              
              <div className="relative flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} p-3 mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={info.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{info.label}</h3>
                <p className="text-sm text-purple-400 break-all">{info.value}</p>
                
                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="absolute inset-0 animate-ping bg-purple-400 rounded-full" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#111118] to-[#1a1a24] p-8 rounded-2xl border border-purple-500/10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-purple-500 rounded-full" />
              Send a Message
            </h2>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2 group-focus-within:text-purple-400 transition-colors">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#0a0a0f] border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-focus-within:opacity-10 transition-opacity pointer-events-none" />
                </div>
              </div>

              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2 group-focus-within:text-purple-400 transition-colors">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#0a0a0f] border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-focus-within:opacity-10 transition-opacity pointer-events-none" />
                </div>
              </div>

              {/* Message Field */}
              <div className="group">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2 group-focus-within:text-purple-400 transition-colors">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project or idea..."
                    className="w-full bg-[#0a0a0f] border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-focus-within:opacity-10 transition-opacity pointer-events-none" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex items-center justify-center gap-2 px-6 py-3 text-white font-medium">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>Send via WhatsApp</span>
                    </>
                  )}
                </div>
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm text-center animate-fade-in">
                  Message ready! WhatsApp opened in new tab.
                </div>
              )}
            </form>
          </div>

          {/* Right Side - Social Links & Additional Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-[#111118] to-[#1a1a24] p-8 rounded-2xl border border-purple-500/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-500 rounded-full" />
                Quick Connect
              </h2>
              
              <div className="space-y-4">
                <a 
                  href="mailto:jitukumar63766@gmail.com"
                  className="flex items-center gap-3 p-3 bg-[#0a0a0f] rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all group"
                >
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm text-white group-hover:text-purple-400 transition-colors">
                      jitukumar63766@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:+916201063766"
                  className="flex items-center gap-3 p-3 bg-[#0a0a0f] rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all group"
                >
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="text-sm text-white group-hover:text-purple-400 transition-colors">
                      +91 62010 66376
                    </p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/916201063766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#0a0a0f] rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all group"
                >
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92v3a1.999 1.999 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8 10a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <p className="text-sm text-white group-hover:text-purple-400 transition-colors">
                      +91 62010 66376
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-[#111118] to-[#1a1a24] p-8 rounded-2xl border border-purple-500/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-500 rounded-full" />
                Social Profiles
              </h2>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className={`absolute inset-0 ${social.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="relative p-4 bg-[#0a0a0f] rounded-xl border border-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300 text-center">
                      <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-500">{social.name}</p>
                      <p className="text-xs text-purple-400 truncate">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-6 rounded-2xl border border-purple-500/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-ping absolute" />
                  <div className="w-3 h-3 bg-green-500 rounded-full relative" />
                </div>
                <div>
                  <p className="text-sm text-white font-semibold">Available for opportunities</p>
                  <p className="text-xs text-gray-400">Typically replies within 1-2 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(15px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;