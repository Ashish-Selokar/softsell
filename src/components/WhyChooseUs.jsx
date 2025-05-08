import { Shield, Clock, BadgeDollarSign, Users } from "lucide-react"

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-10 h-10 text-emerald-600" />,
      title: "Secure & Compliant",
      description: "All transactions follow legal compliance and data security protocols to protect your business.",
    },
    {
      icon: <Clock className="w-10 h-10 text-emerald-600" />,
      title: "Fast Turnaround",
      description: "Get valuations within 24 hours and payment within 3 business days after acceptance.",
    },
    {
      icon: <BadgeDollarSign className="w-10 h-10 text-emerald-600" />,
      title: "Best Market Rates",
      description: "Our extensive network of buyers ensures you get the highest possible value for your licenses.",
    },
    {
      icon: <Users className="w-10 h-10 text-emerald-600" />,
      title: "Expert Support",
      description: "Our team of software licensing experts guides you through every step of the process.",
    },
  ]

  return (
    <section id="why-choose-us" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 bg-emerald-100 p-3 rounded-full inline-block">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
