import { Code, Cloud, Smartphone, Brain, Database, Shield, Globe, Gauge } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for your business.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: Brain,
    title: 'AI & ML Solutions',
    description: 'Intelligent solutions powered by advanced machine learning algorithms.'
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Efficient database design, optimization, and maintenance services.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.'
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to grow your online presence.'
  },
  {
    icon: Gauge,
    title: 'IT Consulting',
    description: 'Expert guidance for your technology decisions and strategy.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition">
                <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}