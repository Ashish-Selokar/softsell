import { Upload, DollarSign, CreditCard } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="w-12 h-12 text-emerald-600" />,
      title: "Upload License",
      description: "Submit your software license details through our secure portal for evaluation.",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-emerald-600" />,
      title: "Get Valuation",
      description: "Receive a competitive valuation based on current market rates within 24 hours.",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-emerald-600" />,
      title: "Get Paid",
      description: "Accept our offer and get paid quickly via your preferred payment method.",
    },
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-emerald-100 p-4 rounded-full">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            Start the Process
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
