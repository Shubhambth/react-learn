const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to My Website</h1>
        <p className="mt-4 text-lg md:text-xl">Build amazing things with React and Tailwind CSS</p>
        <a href="#" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-200 transition">
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">Features</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Fast & Responsive</h3>
            <p className="mt-2 text-gray-600">Optimized for performance and mobile responsiveness.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Easy to Customize</h3>
            <p className="mt-2 text-gray-600">Modify styles and components easily with Tailwind.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Modern UI</h3>
            <p className="mt-2 text-gray-600">Clean and beautiful design with a modern touch.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold">Start Building Today!</h2>
        <p className="mt-2 text-lg">Join us and take your projects to the next level.</p>
        <a href="#" className="mt-4 inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-200 transition">
          Join Now
        </a>
      </section>
    </div>
  );
};

export default Home;
