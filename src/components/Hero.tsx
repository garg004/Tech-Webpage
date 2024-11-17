import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Transforming Ideas into Digital Excellence
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              We deliver cutting-edge technology solutions that drive innovation and business growth. Our expert team turns your vision into reality.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Custom Software Development',
                'Cloud Solutions & DevOps',
                'AI & Machine Learning',
                'Digital Transformation'
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-300" />
                  <span className="ml-2 text-blue-100">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#portfolio" className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition">
                View Portfolio
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
              alt="Technology Innovation"
              className="rounded-lg shadow-xl transform -rotate-2 hover:rotate-0 transition duration-300"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}