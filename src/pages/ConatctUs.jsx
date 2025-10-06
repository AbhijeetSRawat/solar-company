import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building2, Zap, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    systemType: 'residential',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-green-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-green-200">
            Let's discuss how we can power your future with clean energy
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+91 98765 43210",
                subInfo: "Mon-Sat, 9 AM - 7 PM",
                color: "from-green-400 to-emerald-600"
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "info@mavengreen.com",
                subInfo: "24/7 Support",
                color: "from-blue-400 to-indigo-600"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "Mumbai, Maharashtra",
                subInfo: "India",
                color: "from-purple-400 to-pink-600"
              },
              {
                icon: Clock,
                title: "Working Hours",
                info: "Mon - Sat",
                subInfo: "9:00 AM - 7:00 PM",
                color: "from-orange-400 to-red-600"
              }
            ].map((contact, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-green-400 transition-all text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`inline-block p-4 rounded-full bg-gradient-to-br ${contact.color} mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <contact.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-800 font-semibold mb-1">{contact.info}</p>
                <p className="text-gray-600 text-sm">{contact.subInfo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl shadow-xl border-2 border-gray-200">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Request a Free Consultation
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Fill out the form and our team will get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Location/City *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="Mumbai"
                      />
                    </div>
                  </div>

                  {/* System Type */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      System Type *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="systemType"
                        value={formData.systemType}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors appearance-none bg-white"
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="housing-society">Housing Society</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(34,197,94,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        Submitted Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border-2 border-green-500 text-green-800 p-4 rounded-xl text-center"
                    >
                      Thank you! We'll contact you within 24 hours.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Right Side - Map & Benefits */}
            <div className="space-y-8">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-200 h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571687375!2d72.71637344453635!3d19.08219783926088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MAVEN Green Energy Location"
                  />
                </div>
              </motion.div>

              {/* Why Contact Us */}
              <motion.div
                className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl border-2 border-green-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Zap className="w-7 h-7 text-green-600" />
                  Why Contact Us?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Free site inspection & 3D design within 30 minutes",
                    "Custom solar solutions tailored to your needs",
                    "0% EMI financing options available",
                    "25+ year warranty on all installations",
                    "24/7 customer support & maintenance"
                  ].map((benefit, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prefer to Talk Directly?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Our solar experts are ready to answer all your questions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a
              href="tel:+919876543210"
              className="bg-white text-green-700 font-bold py-4 px-10 rounded-full text-lg shadow-2xl inline-flex items-center gap-2"
              whileHover={{ scale: 1.08, boxShadow: "0 20px 60px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
            <motion.a
              href="mailto:info@mavengreen.com"
              className="bg-transparent border-3 border-white text-white font-bold py-4 px-10 rounded-full text-lg backdrop-blur-sm inline-flex items-center gap-2"
              whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Email Us
            </motion.a>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Contact;
