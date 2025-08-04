import React from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function ContactSection() {
  const contactDetails = [
    {
      icon: FaPhone,
      title: 'Phone',
      primary: '+254 700 123 456',
      secondary: '+254 700 123 457',
      description: 'Call us during business hours',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      primary: 'hello@teaspace.co.ke',
      secondary: 'news@teaspace.co.ke',
      description: 'Get in touch via email',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Office',
      primary: 'Westlands, Nairobi',
      secondary: 'Kenya, East Africa',
      description: 'Visit our newsroom',
    },
    {
      icon: FaClock,
      title: 'Hours',
      primary: 'Mon - Fri: 8AM - 6PM',
      secondary: 'Sat - Sun: 10AM - 4PM',
      description: "We're here to help",
    },
  ]

  const socialLinks = [
    { icon: FaXTwitter, href: 'https://x.com/_teaspace', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/tea_space_/', label: 'Instagram' },
    { icon: FaFacebook, href: 'https://www.facebook.com/teaspacedigital/', label: 'Facebook' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#0066cc] text-sm font-medium mb-4">
            <FaEnvelope className="mr-2 text-xs" />
            Contact Us
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Get in Touch with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066cc] to-[#d53020]">
              {' '}
              TeaSpace
            </span>
          </h2>

          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            Have a story tip, press inquiry, or just want to say hello? We{"'"}re here to listen.
            Reach out to our team and we{"'"}ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactDetails.map((contact, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-200 group"
            >
              <div className="flex flex-col items-start space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-lg flex items-center justify-center">
                  <contact.icon className="text-white text-lg" />
                </div>

                <div className="w-full">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <div className="space-y-1">
                    <p className="text-gray-800 font-medium">{contact.primary}</p>
                    <p className="text-gray-600 text-sm">{contact.secondary}</p>
                    <p className="text-gray-500 text-xs">{contact.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Additional Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">News Tips & Story Submissions</h3>

            <p className="text-gray-600 leading-relaxed">
              Have breaking entertainment news or an exclusive story? Our newsroom is always open to
              credible tips and story leads. We protect our sources and maintain the highest
              standards of journalistic integrity.
            </p>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#d53020]/30 to-[#d53020]/70 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">News Tips</div>
                  <div className="text-xs text-gray-500">Send us your story leads</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Email: <span className="font-medium text-[#0066cc]">teaspaceafrica@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Right Side - Social Media & CTA */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0066cc] to-[#d53020] p-8 text-white">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <p className="mb-6 text-blue-100">
                  Stay connected with TeaSpace on social media for the latest entertainment news and
                  behind-the-scenes content.
                </p>

                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                    >
                      <social.icon className="text-white text-lg" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/2 left-6 w-6 h-6 bg-white/15 rounded-full"></div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Quick Response Promise</h4>
              <p className="text-gray-600 text-sm">
                We typically respond to all inquiries within 24 hours during business days. For
                urgent news tips, expect to hear from us even sooner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
