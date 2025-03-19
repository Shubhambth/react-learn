import React from 'react'

function Home() {
 

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Welcome to <span className="text-blue-600">My Website</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Build amazing projects with Django and React.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
