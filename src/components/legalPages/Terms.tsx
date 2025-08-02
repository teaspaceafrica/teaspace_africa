'use client'
import { useState } from 'react'
import {
  FaGavel,
  FaNewspaper,
  FaUserShield,
  FaCopyright,
  FaExclamationTriangle,
  FaHandshake,
  FaChevronDown,
  FaChevronUp,
  FaShieldAlt,
} from 'react-icons/fa'

export default function TermsConditionsPage() {
  const [activeSection, setActiveSection] = useState(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleSection = (index: any) => {
    setActiveSection(activeSection === index ? null : index)
  }

  const sections = [
    {
      id: 'acceptance-terms',
      title: 'Acceptance of Terms',
      icon: FaHandshake,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Welcome to TeaSpace! By accessing and using our website, you agree to be bound by these
            Terms and Conditions.
          </p>
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">What this means:</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• You agree to follow our community guidelines</li>
              <li>• You accept responsibility for your interactions with our content</li>
              <li>• You understand our rights and limitations as a news platform</li>
              <li>• These terms apply whether you{"'"}re a casual reader or subscriber</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> If you don{"'"}t agree with these terms, please don{"'"}t
              use our website. Continued use means you accept all conditions outlined here.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'website-use',
      title: 'Website Use & Access',
      icon: FaNewspaper,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            TeaSpace grants you a limited, non-exclusive license to access and use our website for
            personal, non-commercial purposes.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold  mb-2 text-green-800">✓ You May:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Read and share our articles</li>
                <li>• Subscribe to our newsletter</li>
                <li>• Contact us with news tips</li>
                <li>• Link to our content with proper attribution</li>
                <li>• Use our content for personal reference</li>
              </ul>
            </div>
            <div className="bg-white border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold  mb-2 text-red-800">✗ You May Not:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Republish our content without permission</li>
                <li>• Use automated tools to scrape our site</li>
                <li>• Interfere with website functionality</li>
                <li>• Share false or misleading information</li>
                <li>• Use our platform for commercial purposes</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              We reserve the right to restrict or terminate access for users who violate these
              guidelines or engage in activities that harm our platform or community.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'content-accuracy',
      title: 'Content & Editorial Standards',
      icon: FaShieldAlt,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            TeaSpace strives to provide accurate, timely entertainment news while maintaining high
            journalistic standards.
          </p>
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Our Commitment:</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Fact-check information before publication</li>
              <li>• Clearly distinguish between news and opinion</li>
              <li>• Correct errors promptly when identified</li>
              <li>• Respect privacy and dignity in our reporting</li>
              <li>• Maintain editorial independence</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Important Disclaimers:</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p>• Entertainment news may include rumors, speculation, and unconfirmed reports</p>
              <p>
                • We clearly label such content and update stories as new information becomes
                available
              </p>
              <p>
                • Opinions expressed in editorial content are those of the authors, not necessarily
                TeaSpace
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Corrections Policy:</strong> If you notice an error in our reporting, please
              contact us at corrections@teaspace.co.ke. We{"'"}ll investigate and issue corrections
              as necessary.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: FaCopyright,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            All content on TeaSpace, including articles, images, logos, and design elements, is
            protected by copyright and other intellectual property laws.
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">TeaSpace Content:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Original articles and reporting belong to TeaSpace</li>
                <li>• Our logo, branding, and website design are protected</li>
                <li>• Photographs may be owned by TeaSpace or licensed from third parties</li>
                <li>• User-generated content (comments, tips) may be used by TeaSpace</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Fair Use Guidelines:</h4>
              <p className="text-sm text-gray-700 mb-2">
                You may quote brief excerpts of our articles for:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• News reporting and commentary</li>
                <li>• Academic research and criticism</li>
                <li>• Social media sharing with proper attribution</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Copyright Infringement:</strong> If you believe your copyrighted work has
                been used without permission, contact us at legal@teaspace.co.ke with details of the
                alleged infringement.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'user-conduct',
      title: 'User Conduct & Community Guidelines',
      icon: FaUserShield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            TeaSpace fosters a respectful community where entertainment news can be discussed
            constructively.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold  mb-2 text-green-800">Encouraged Behavior:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Respectful discussions about entertainment topics</li>
                <li>• Sharing credible news tips and information</li>
                <li>• Constructive feedback on our reporting</li>
                <li>• Engaging thoughtfully with our content</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 ">Prohibited Conduct:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Harassment, threats, or abusive language</li>
                <li>• Spreading false information or malicious rumors</li>
                <li>• Infringing on others{"'"} privacy or rights</li>
                <li>• Spam, promotional content, or self-promotion</li>
                <li>• Any illegal activities or content</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Enforcement:</strong> Users who violate these guidelines may have their access
              restricted or terminated. We reserve the right to report illegal activities to
              appropriate authorities.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'disclaimers-limitations',
      title: 'Disclaimers & Limitations',
      icon: FaExclamationTriangle,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            While we strive for accuracy and reliability, there are important limitations to
            understand about our service.
          </p>
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Service Availability:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Website may be temporarily unavailable for maintenance</li>
                <li>• We don{"'"}t guarantee uninterrupted access to our content</li>
                <li>• Third-party services (social media, analytics) may affect functionality</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Content Disclaimers:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Entertainment news may include unverified information</li>
                <li>• We{"'"}re not liable for decisions made based on our content</li>
                <li>• External links may lead to content we don{"'"}t control</li>
                <li>• Information accuracy can{"'"}t be guaranteed in real-time</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Limitation of Liability:</h4>
              <p className="text-sm text-gray-700">
                TeaSpace{"'"}s liability is limited to the maximum extent permitted by Kenyan law.
                We{"'"}re not responsible for indirect, incidental, or consequential damages arising
                from your use of our website.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'governing-law',
      title: 'Governing Law & Dispute Resolution',
      icon: FaGavel,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            These terms are governed by the laws of Kenya, and any disputes will be resolved through
            Kenyan courts.
          </p>
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Jurisdiction:</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• These terms are governed by Kenyan law</li>
              <li>• Disputes will be resolved in Nairobi courts</li>
              <li>• We encourage informal resolution before legal action</li>
              <li>• Contact us first to resolve any issues amicably</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Changes to Terms:</h4>
            <p className="text-sm text-gray-700 mb-2">
              We may update these terms occasionally. When we do:
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• We{"'"}ll update the &quot;Last Modified&quot; date</li>
              <li>• Significant changes will be announced on our website</li>
              <li>• Continued use after changes means acceptance</li>
              <li>• You can always contact us with questions about updates</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Contact for Legal Matters:</strong> For legal inquiries or disputes, contact
              us at legal@teaspace.co.ke or our main office in Westlands, Nairobi.
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
            <FaGavel className="mr-2 text-xs" />
            Terms & Conditions
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Terms of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066cc] to-[#d53020]">
              {' '}
              Service
            </span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            These terms govern your use of TeaSpace and outline our mutual rights and
            responsibilities. We{"'"}ve made them as clear and straightforward as possible.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-left">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-lg flex items-center justify-center">
                <FaGavel className="text-white text-sm" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Last Updated: August 2, 2025</div>
                <div className="text-sm text-gray-500">Effective immediately</div>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              These terms apply to all users of TeaSpace website, including casual readers,
              newsletter subscribers, and anyone who contacts us.
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
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We{"'"}re here to clarify anything you don{"'"}t understand. Don{"'"}t hesitate to
              reach out if you need more information about our terms of service.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-left">
                <div className="font-semibold mb-1">General Inquiries</div>
                <div className="text-sm text-blue-100">hello@teaspace.co.ke</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-left">
                <div className="font-semibold mb-1">Legal Matters</div>
                <div className="text-sm text-blue-100">legal@teaspace.co.ke</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-left">
                <div className="font-semibold mb-1">Response Time</div>
                <div className="text-sm text-blue-100">Within 5 business days</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
