import React from 'react'
import {useParams} from 'react-router-dom'


const User = () =>{
  
    const user = {
      name: "Shubham Singh",
      username: "@shubham_dev",
      bio: "Django & React Developer | Content Creator | Tech Enthusiast",
      profilePic: "https://via.placeholder.com/150", // Replace with actual profile picture
      email: "shubham@example.com",
      location: "India",
      website: "https://yourwebsite.com",
    };

  const {userid} = useParams();
  return(
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
          />
          <h2 className="text-2xl font-semibold text-gray-900 mt-4">{user.name}</h2>
          <p className="text-gray-600">{user.username} userid:{userid}</p>
          <p className="mt-2 text-gray-700">{user.bio}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Details</h3>
          <ul className="mt-2 text-gray-700 space-y-2">
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Location:</strong> {user.location}</li>
            <li><strong>Website:</strong> <a href={user.website} className="text-blue-600 hover:underline">{user.website}</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default User