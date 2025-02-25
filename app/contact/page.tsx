import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input type="text" id="name" name="name" className="w-full p-2 border rounded-md" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded-md" required />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone
                </label>
                <input type="tel" id="phone" name="phone" className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 border rounded-md"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-blue-600" />
                <span>info@physiowell.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-blue-600" />
                <span>123 Wellness Street, Health City, HC 12345</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784568459395!3d40.74844797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729599!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

