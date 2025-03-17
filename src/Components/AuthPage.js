import React, { useState } from 'react';
import Signin from './Signin';
import Signup from './Signup';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false); // default show signin

  const toggleForm = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {isSignup ? 'Sign Up' : 'Sign In'}
        </h2>

        {isSignup ? <Signup /> : <Signin />}

        <div className="text-center mt-4">
          {isSignup ? (
            <p>
              Already have an account?{' '}
              <button
                onClick={toggleForm}
                className="text-blue-500 hover:underline"
              >
                Sign In here
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <button
                onClick={toggleForm}
                className="text-blue-500 hover:underline"
              >
                Sign Up here
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
