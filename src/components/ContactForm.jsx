"use client"

import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const licenseTypes = [
    "Microsoft Office",
    "Adobe Creative Cloud",
    "AutoCAD",
    "Oracle Database",
    "SAP",
    "Salesforce",
    "VMware",
    "Other",
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.company.trim()) newErrors.company = "Company is required"
    if (!formData.licenseType) newErrors.licenseType = "Please select a license type"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", company: "", licenseType: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Get a Free Valuation</h2>

        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
          {isSubmitted ? (
            <div className="text-center">
              <div className="text-emerald-600 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                We've received your information and will contact you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Full Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Email Address*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Company Name*</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp."
                    className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors.company ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">License Type*</label>
                  <select
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors.licenseType ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select License Type</option>
                    {licenseTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Message*</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the licenses you'd like to sell..."
                  className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
              >
                Submit Request
              </button>

              <p className="text-sm text-gray-500 mt-4 text-center">
                By submitting, you agree to our{" "}
                <a href="#" className="text-emerald-600 hover:underline">Privacy Policy</a> and{" "}
                <a href="#" className="text-emerald-600 hover:underline">Terms of Service</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
