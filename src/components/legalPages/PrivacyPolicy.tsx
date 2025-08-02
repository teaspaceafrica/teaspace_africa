'use client'
import { useState } from 'react'
import {
  FaShieldAlt,
  FaEnvelope,
  FaEye,
  FaLock,
  FaUserCheck,
  FaGavel,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa'

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleSection = (index: any) => {
    setActiveSection(activeSection === index ? null : index)
  }

  const sections = [
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      icon: FaEye,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            TeaSpace collects minimal personal information to provide our services effectively:
          </p>
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Contact Form Data:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Your name</li>
              <li>• Email address</li>
              <li>• Message content</li>
              <li>• Optional phone number</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Newsletter Subscription:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Email address</li>
              <li>• Subscription preferences</li>
              <li>• Date of subscription</li>
            </ul>
          </div>
          <p className="text-gray-600 text-sm">
            We also automatically collect basic website analytics (page views, browser type, device
            information) to improve our services, but this data is anonymized and cannot identify
            individual users.
          </p>
        </div>
      ),
    },
    {
      id: 'how-we-use-information',
      title: 'How We Use Your Information',
      icon: FaUserCheck,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">Your information is used exclusively for:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-[#0066cc]" />
                Contact Communications
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Responding to your inquiries</li>
                <li>• Following up on news tips</li>
                <li>• Providing customer support</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-[#d53020]" />
                Newsletter Service
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Sending entertainment news updates</li>
                <li>• Sharing exclusive content</li>
                <li>• Notifying about breaking stories</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>We never:</strong> Sell your data, share it with third parties for marketing,
              or use it for purposes other than those stated above.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'data-security',
      title: 'Data Security & Storage',
      icon: FaLock,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            We take data security seriously and implement industry-standard measures to protect your
            information:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Security Measures:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-[#0066cc]/30 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-[#0066cc] rounded-full"></div>
                  </div>
                  SSL encryption for all data transmission
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-[#0066cc]/30 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-[#0066cc] rounded-full"></div>
                  </div>
                  Secure servers with regular backups
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-[#0066cc]/30 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-[#0066cc] rounded-full"></div>
                  </div>
                  Limited access to authorized personnel only
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Data Retention:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-[#d53020]/30 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-[#d53020] rounded-full"></div>
                  </div>
                  Contact form data: 2 years maximum
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-[#d53020]/30 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-[#d53020] rounded-full"></div>
                  </div>
                  Newsletter data: Until you unsubscribe
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-[#d53020]/30 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-[#d53020] rounded-full"></div>
                  </div>
                  Analytics data: Anonymized after 26 months
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'your-rights',
      title: 'Your Rights & Choices',
      icon: FaGavel,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            You have full control over your personal information. Here{"'"}s what you can do:
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Data Rights:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Request a copy of your data</li>
                  <li>✓ Update or correct your information</li>
                  <li>✓ Delete your data completely</li>
                  <li>✓ Restrict how we process your data</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Easy Actions:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Unsubscribe from newsletters anytime</li>
                  <li>✓ Contact us to update preferences</li>
                  <li>✓ Request data deletion via email</li>
                  <li>✓ Opt-out of analytics tracking</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>To exercise your rights:</strong> Email us at privacy@teaspace.co.ke or use
              our contact form. We{"'"}ll respond within 30 days and verify your identity before
              processing any requests.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies & Tracking',
      icon: FaEye,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            TeaSpace uses minimal tracking technologies to improve your browsing experience:
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies:</h4>
              <p className="text-sm text-gray-700">
                Required for basic website functionality, remembering your preferences, and
                maintaining your session. These cannot be disabled.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies:</h4>
              <p className="text-sm text-gray-700">
                Help us understand how visitors use our site through anonymized data. You can
                opt-out of these through your browser settings.
              </p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Third-party services:</strong> We use Google Analytics for website statistics.
              Their privacy policy applies to this data collection.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'policy-updates',
      title: 'Policy Updates',
      icon: FaShieldAlt,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            We may update this privacy policy occasionally to reflect changes in our practices or
            legal requirements.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">How we notify you:</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Email notification to newsletter subscribers</li>
              <li>• Notice on our website homepage</li>
              <li>• Updated &quot;Last Modified&quot; date below</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              Significant changes will be communicated at least 30 days before taking effect.
              Continued use of our website after updates indicates acceptance of the new policy.
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#0066cc] text-sm font-medium mb-6">
            <FaShieldAlt className="mr-2 text-xs" />
            Privacy Policy
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Your Privacy
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066cc] to-[#d53020]">
              {' '}
              Matters to Us
            </span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            At TeaSpace, we believe in transparency. This privacy policy explains exactly how we
            collect, use, and protect your personal information in simple, clear language.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-left">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-lg flex items-center justify-center">
                <FaShieldAlt className="text-white text-sm" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Last Updated: August 2, 2025</div>
                <div className="text-sm text-gray-500">Effective immediately</div>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              This policy applies to all information collected through our website, contact forms,
              and newsletter subscriptions.
            </p>
          </div>
        </div>
      </section>

      {/* Expandable Sections */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-lg flex items-center justify-center">
                      <section.icon className="text-white text-sm" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                  </div>
                  <div className="text-gray-400">
                    {activeSection === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {activeSection === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">{section.content}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0066cc] to-[#d53020] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We{"'"}re here to help. If you have any questions about this privacy policy or how we
              handle your data, don{"'"}t hesitate to reach out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 rounded-lg p-4 text-left">
                <div className="font-semibold mb-1">Email Us</div>
                <div className="text-sm text-blue-100">privacy@teaspace.co.ke</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-left">
                <div className="font-semibold mb-1">Response Time</div>
                <div className="text-sm text-blue-100">Within 30 days</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
