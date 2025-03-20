import { useState } from "react";
import { useParams } from 'react-router'

const Profile = () => {

  const { username } = useParams();
  
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Full Stack Developer | Passionate about coding and open-source",
    location: "New York, USA",
    profilePic: "https://picsum.photos/150", // Replace with actual image
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full text-center">
        {/* Profile Picture */}
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
        />
        <h2 className="text-2xl font-semibold mt-4">{username}</h2>
        <p className="text-gray-600">{user.email}</p>

        {/* User Details */}
        <div className="mt-4 text-gray-700">
          <p><strong>Location:</strong> {user.location}</p>
          <p className="mt-2">{user.bio}</p>
        </div>

        {/* Edit Button */}
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
