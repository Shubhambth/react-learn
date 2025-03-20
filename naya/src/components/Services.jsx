const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg md:text-xl">We provide high-quality services tailored to your needs.</p>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">What We Offer</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="mt-2 text-gray-600">Custom websites and web apps built with modern technologies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">E-Commerce Solutions</h3>
            <p className="mt-2 text-gray-600">We create high-performing online stores for businesses.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">SEO & Marketing</h3>
            <p className="mt-2 text-gray-600">Increase visibility and grow your audience with our marketing strategies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Mobile App Development</h3>
            <p className="mt-2 text-gray-600">Build engaging and user-friendly mobile applications.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">UI/UX Design</h3>
            <p className="mt-2 text-gray-600">Designing intuitive and visually appealing user experiences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Technical Support</h3>
            <p className="mt-2 text-gray-600">24/7 support to ensure your business runs smoothly.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold">Get Started with Our Services</h2>
        <p className="mt-2 text-lg">Contact us today to take your business to the next level.</p>
        <a href="#" className="mt-4 inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Services;
