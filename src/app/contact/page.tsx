"use client";

import { contactData } from "../lib/contact";
import { FaLinkedin, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // Here you would typically make an API call to send the form data
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccessMessage('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setErrorMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              Get in touch with us for any inquiries or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Send us a Message</h2>
            {successMessage && (
              <div className="bg-green-600 text-white p-4 rounded mb-6">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="bg-red-600 text-white p-4 rounded mb-6">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {contactData.contactForm.fields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <label htmlFor={field.id} className="block text-sm font-medium">
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows={4}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : contactData.contactForm.submitText}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactData.locations.map((location, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">{location.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="w-5 h-5 mr-2" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="w-5 h-5 mr-2" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="w-5 h-5" />
                    <a
                      href={`mailto:${location.email}`}
                      className="text-blue-500 hover:text-blue-400 break-all"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Working Hours</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaClock className="w-5 h-5 mr-2" />
                <span>Monday - Thursday: {contactData.mainContact.workingHours.mondayToThursday}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="w-5 h-5 mr-2" />
                <span>Friday: {contactData.mainContact.workingHours.friday}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="w-5 h-5 mr-2" />
                <span>Saturday: {contactData.mainContact.workingHours.saturday}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Follow Us</h2>
            <div className="flex justify-center gap-6">
              {contactData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-500 transition-colors duration-200"
                >
                  {link.icon === "FaLinkedin" && <FaLinkedin />}
                  {link.icon === "FaTwitter" && <FaTwitter />}
                  {link.icon === "FaInstagram" && <FaInstagram />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
