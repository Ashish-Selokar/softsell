const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo + Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">SoftSell</h3>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              SoftSell helps businesses recover value from unused software licenses. Our platform makes it easy to sell
              your surplus licenses securely and at competitive rates.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Uncomment and replace hrefs/icons with real ones if needed */}
              {/* Example social icon placeholder */}
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              {/* Add more social icons here */}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Careers", "Press", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} SoftSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
