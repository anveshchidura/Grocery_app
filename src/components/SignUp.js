import React, { useState } from "react";
import { UserAuth } from "../utils/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-main.png";

// Subcomponent for input fields
const InputField = ({ type, placeholder, onChange }) => (
  <input
    type={type}
    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-dark bg-white bg-clip-padding border border-solid border-gray rounded transition ease-in-out m-0 focus:text-gray-dark focus:bg-white focus:border-yellow focus:outline-none"
    placeholder={placeholder}
    onChange={onChange}
  />
);

// Subcomponent for the sign-up form
const SignUpForm = ({ onEmailChange, onPasswordChange, onSubmit, error }) => (
  <form onSubmit={onSubmit}>
    <div className="mb-6">
      <InputField type="email" placeholder="Email address" onChange={onEmailChange} />
    </div>
    <div className="mb-6">
      <InputField type="password" placeholder="Password" onChange={onPasswordChange} />
    </div>
    {error && <div className="mb-6 error-text">{error}</div>}
    <button
      type="submit"
      className="inline-block px-7 py-3 bg-yellow text-blue-dark font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow hover:shadow-lg focus:bg-yellow focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow active:shadow-lg transition duration-150 ease-in-out w-full"
    >
      Sign Up
    </button>
    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray before:mt-0.5 after:flex-1 after:border-t after:border-gray after:mt-0.5">
      <p className="text-center text-bio font-semibold mx-4 mb-0">OR</p>
    </div>
    <div className="text-center mt-2 pt-1">
      <p className="text-md font-semibold mb-0 text-blue-dark">
        Already have an account ?
        <Link
          to="/"
          className="text-red ml-2 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out underline"
        >
          Sign in.
        </Link>
      </p>
    </div>
  </form>
);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="h-screen px-6 py-12">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-dark">
        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
          <div className="flex justify-center mb-6">
            <img src={logo} className="w-[20%]" alt="Logo" />
          </div>
          <SignUpForm
            onEmailChange={(e) => setEmail(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onSubmit={handleSignUpSubmit}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
