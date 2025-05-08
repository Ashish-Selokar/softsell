const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-teal-100 section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Turn Unused Software Licenses Into Cash
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              SoftSell helps businesses recover value from unused or surplus software licenses. Fast, secure, and
              hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center">
                Get a Quote
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-3 bg-white text-emerald-600 font-medium rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300 text-center"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="bg-white p-6 rounded-xl shadow-xl">
                <img
                  src="https://itsm.tools/wp-content/uploads/2020/02/software-license.jpg"
                  alt="Software license management illustration"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">Recover up to 70% of license value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
