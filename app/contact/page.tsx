import React from 'react';
import { Phone, Mail, MapPin, Send, User, AtSign } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">We're here to help with any questions you might have about our services. Reach out and we'll respond as soon as we can.</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Form Section */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="pl-10 w-full py-3 border-gray-300 border rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 transition duration-200" 
                      placeholder="John Doe"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <AtSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="pl-10 w-full py-3 border-gray-300 border rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 transition duration-200" 
                      placeholder="john@example.com"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="pl-10 w-full py-3 border-gray-300 border rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 transition duration-200" 
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full py-3 px-4 border-gray-300 border rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 transition duration-200"
                    placeholder="How can we help you today?"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            
            {/* Contact Info Section */}
            <div className="bg-blue-600 text-white p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Call Us</p>
                    <p className="text-lg font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Email Us</p>
                    <p className="text-lg font-medium">info@physiowell.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Location</p>
                    <p className="text-lg font-medium">123 Wellness Street</p>
                    <p>Health City, HC 12345</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784568459395!3d40.74844797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729599!5m2!1sen!2sus"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-blue-200 mb-2">Business Hours</p>
                  <p className="font-medium">Monday - Friday: 9AM - 6PM</p>
                  <p className="font-medium">Saturday: 10AM - 4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}