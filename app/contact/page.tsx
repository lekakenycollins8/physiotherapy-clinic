// Code: Contact Page Component
"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Send, User, AtSign, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const whatsappMessage = "Hi, I'd like to book a physio session";
  const whatsappLink = `https://wa.me/254706143886?text=${encodeURIComponent(whatsappMessage)}`;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_swcixg1', // EmailJS service ID
        'template_b0n5j2d', // EmailJS template ID
        formData,
        '9sKdu7j5esa2bGv0J' // EmailJS public key
      );
      setSuccess('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSuccess('Failed to send message. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-white-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Book Your Session</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">Ready to start your recovery journey? Call us directly for immediate booking confirmation!</p>
          
          {/* Prominent CTAs */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-6 max-w-lg mx-auto mb-8">
            <div className="text-3xl mb-3">⚡</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Instantly</h2>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
              <a href="tel:+254706143886" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            <p className="text-gray-700 text-sm text-center">Same-day appointments • Instant confirmation • No waiting</p>
          </div>
          
          <p className="text-gray-500 text-sm mb-2">Or use the form below if you prefer</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <span className="text-lg font-semibold text-green-800">Skip the form - book instantly!</span>
                </div>
                <div className="flex gap-2">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a href="tel:+254706143886" className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Online Booking Form</h2>
              {success && (
                <div className={`mb-4 p-4 rounded-lg ${success.includes('Failed') ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
                  <p className={`text-lg font-medium ${success.includes('Failed') ? 'text-red-700' : 'text-green-700'}`}>{success}</p>
                  {success.includes('Failed') && (
                    <div className="mt-3">
                      <p className="text-sm text-red-600 mb-2">Try these instant booking options instead:</p>
                      <div className="flex gap-2">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp
                        </a>
                        <a href="tel:+254706143886" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          Call
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="pl-10 w-full py-3 border-gray-300 border rounded-lg bg-gray-50" placeholder="Your Full Name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <AtSign className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="pl-10 w-full py-3 border-gray-300 border rounded-lg bg-gray-50" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="pl-10 w-full py-3 border-gray-300 border rounded-lg bg-gray-50" placeholder="+254..." />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full py-3 px-4 border-gray-300 border rounded-lg bg-gray-50" placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
            {/* Contact Information Section Remains Unchanged */}
            <div className="bg-blue-600 text-white p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Call Us</p>
                    <p className="text-lg font-medium">+254 706 143 886</p>
                    {/* <p className="text-lg font-medium">+254 740 277 532</p> */}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Email Us</p>
                    <p className="text-lg font-medium md:block sm:hidden">motionworksphysiotherapy@gmail.com</p>
                    <p className="text-lg font-medium hidden md:hidden sm:block">motionworksphysiotherapy@gmail<br className="hidden lg:block" />.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Location</p>
                    <p className="text-lg font-medium">Princess Park Apartments</p>
                    <p className="text-base font-medium">Along Ngong Road, Nairobi</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Princess Park Apartments</h3>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.3263195014772!2d36.755806894725936!3d-1.2908065835238003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a3c42971b55%3A0x6861bafd28de4a3e!2sPrincess%20Park%20Apartments!5e0!3m2!1sen!2ske!4v1759134104127!5m2!1sen!2ske"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-blue-200 mb-2">Business Hours</p>
                  <p className="font-medium">Monday - Friday: 8AM - 6PM</p>
                  <p className="font-medium">Saturday & Sunday: 9AM - 4PM</p>
                  <p className="font-medium">Sunday: Appointments Only</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}
