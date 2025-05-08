import { Star } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Inc.",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was seamless and their valuation exceeded our expectations.",
      stars: 5,
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "Innovate Solutions",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "After downsizing our team, we had surplus licenses that were going to waste. SoftSell provided a quick and efficient way to recoup some of our investment.",
      stars: 5,
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
