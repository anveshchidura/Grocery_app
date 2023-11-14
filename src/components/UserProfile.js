import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adduserprofile } from '../utils/userSlice';

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = (role) => {
    dispatch(adduserprofile(role));
    navigate(`/signin`);
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="text-center text-black">
        <h1 className="text-4xl font-bold mb-4">Grocery Management App</h1>
        <p className="text-lg mb-8">Choose your role to sign in:</p>

        <div className="flex space-x-4">
          <button
            onClick={() => handleSignIn('user')}
            className="bg-yellow hover:bg-indigo-700 text-black font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105"
          >
            Sign In as User
          </button>

          <button
            onClick={() => handleSignIn('store-owner')}
            className="bg-yellow hover:bg-indigo-700 text-black font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105"
          >
            Sign In as Store Owner
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
