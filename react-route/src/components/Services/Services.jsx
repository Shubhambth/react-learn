import React from 'react'

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Build modern and responsive websites using Django and React.",
      icon: "💻",
    },
    {
      title: "App Development",
      description: "Develop cross-platform mobile apps with Flutter and React Native.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "Create visually appealing and user-friendly interfaces.",
      icon: "🎨",
    },
    {
      title: "SEO Optimization",
      description: "Improve website ranking with SEO best practices.",
      icon: "🚀",
    },
    {
      title: "SEO Optimization",
      description: "Improve website ranking with SEO best practices.",
      icon: "🚀",
    },
    {
      title: "SEO Optimization",
      description: "Improve website ranking with SEO best practices.",
      icon: "🚀",
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Our <span className="text-blue-600">Services</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
              <div className="text-5xl">{service.icon}</div>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
