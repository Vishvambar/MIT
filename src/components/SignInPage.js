import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Valid credentials
  const VALID_USERNAME = "ADT23SOCB0699";
  const VALID_PASSWORD = "9090@PAPA";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic validation
    if (username.trim() === "") {
      setError("Please enter your username.");
      setIsLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      // Check credentials
      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        setError("");
        console.log("Login successful for:", username);
        // Store authentication state in localStorage
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', 'PARTH PATIL NISCHAL');
        // Navigate to dashboard
        navigate('/dashboard');
      } else {
        setError("Invalid username or password. Please try again.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] flex flex-col items-center justify-start px-4 py-6 sm:pt-12">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8 w-full max-w-md">
        <img
          src="https://student.mitapps.in/site/static/images/mit.jpg"
          alt="MIT-ADT Logo"
          className="mx-auto w-32 h-20 sm:w-40 sm:h-24 mb-4 object-contain"
         />
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 px-2 leading-tight">
          MIT Art, Design and Technology University, Pune
        </h1>
        <p className="text-sm text-gray-600">Student Examination Portal</p>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 sm:p-6">
        <h2 className="text-xl sm:text-lg font-semibold text-gray-700 mb-6 text-center sm:text-left">Sign In</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-base sm:text-sm font-medium text-gray-700 mb-2">
              Username *
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg bg-[#e6f0ff] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all min-h-[44px]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
              placeholder="Enter your username"
              autoComplete="username"
              autoCapitalize="none"
              autoCorrect="off"
              required
            />
          </div>

          <div>
            <label className="block text-base sm:text-sm font-medium text-gray-700 mb-2">
              Password *
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg bg-[#e6f0ff] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all min-h-[44px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-600 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Mobile-first button layout */}
          <div className="space-y-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-red-600 border-2 border-red-600 py-3 px-6 rounded-lg hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-base font-medium transition-all min-h-[44px] active:bg-red-100"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </>
              ) : (
                'Login'
              )}
            </button>
            
            <div className="text-center">
              <button 
                type="button"
                onClick={() => alert('Please contact administrator for password reset')}
                className="text-blue-600 hover:text-blue-800 hover:underline bg-transparent border-none cursor-pointer text-base font-medium py-2 px-4 min-h-[44px] transition-colors"
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </form>


      </div>

      {/* Safe area spacing for mobile */}
      <div className="h-8 sm:h-4"></div>
    </div>
  );
}
