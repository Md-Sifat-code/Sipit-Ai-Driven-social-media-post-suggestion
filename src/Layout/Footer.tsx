

import type React from "react"
import { Mail, Facebook, Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react"

interface FooterLink {
  label: string
  href: string
}

const Footer: React.FC = () => {
  const coreLinks: FooterLink[] = [
    { label: "Feed", href: "/feed" },
    { label: "Examples", href: "/examples" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const legalLinks: FooterLink[] = [
    { label: "FAQ's", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "AI Disclaimer", href: "/ai-disclaimer" },
    { label: "Cookie Preferences", href: "/cookies" },
  ]

  const socialLinks: FooterLink[] = [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Twitter/X", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Discord", href: "https://discord.com" },
  ]

  const getSocialIcon = (label: string) => {
    switch (label) {
      case "Facebook":
        return <Facebook className="w-4 h-4" />
      case "Twitter/X":
        return <Twitter className="w-4 h-4" />
      case "LinkedIn":
        return <Linkedin className="w-4 h-4" />
      case "Instagram":
        return <Instagram className="w-4 h-4" />
      case "Discord":
        return <MessageCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    console.log("Subscribe email:", email)
    // Handle subscription logic here
  }

  return (
    <footer className="bg-[#07191A] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section with Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-6">
          {/* Logo and Tagline */}
          <div className="flex items-center gap-4">
            <img 
              className="h-10 sm:h-12 w-auto" 
              src="../src/assets/logo.svg" 
              alt="SiPT Logo" 
            />
            <div className="max-w-md">
              <h2 className="text-lg sm:text-xl font-semibold leading-tight">
                Built for people who think before they post. Sometimes.
              </h2>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full lg:w-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-sm w-full">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                  className="w-full pl-10 pr-4 py-2 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors"
                />
              </div>
              <button
                style={{
                  background: "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
                }}
                type="submit"
                className="px-4 py-2 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-800 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 border-t border-gray-700 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* About Section */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-3">About SiPT</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We help you rewrite your thoughts before the internet cancels you. Whether you're drafting a savage reply,
              a heartfelt apology, or just trying not to sound like a robot - SiPT gives your words the tone they should
              have. Smart, private, and a little too honest.
            </p>
          </div>

          {/* Core Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Core Links</h3>
            <nav className="space-y-2">
              {coreLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal & Policy Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal & Policy Links</h3>
            <nav className="space-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Social Media</h3>
            <nav className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {getSocialIcon(link.label)}
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

      
         <div className="mt-12 flex justify-center">
          <img className="max-w-full h-auto" src="../src/assets/SiPT.svg" alt="SiPT Brand Logo" />
        </div>
      

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-6">
          <p className="text-center text-gray-400 text-sm">© 2025 SiPTit.com - Say it smart, say it right.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
