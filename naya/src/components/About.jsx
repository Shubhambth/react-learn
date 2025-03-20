const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="mt-4 text-lg md:text-xl">Learn more about our team and mission.</p>
      </section>

      {/* Our Mission */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Mission</h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          We are dedicated to providing high-quality solutions that empower developers 
          and businesses. Our goal is to create innovative, user-friendly, and scalable 
          applications that drive success.
        </p>
      </section>

      {/* Our Team */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">Meet Our Team</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 mx-auto rounded-full" />
            <h3 className="text-xl font-semibold mt-4">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 mx-auto rounded-full" />
            <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 mx-auto rounded-full" />
            <h3 className="text-xl font-semibold mt-4">Mike Johnson</h3>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold">Want to Work with Us?</h2>
        <p className="mt-2 text-lg">Join our team and be part of something amazing.</p>
        <a href="#" className="mt-4 inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
