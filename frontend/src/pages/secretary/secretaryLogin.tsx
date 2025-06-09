import { User, Lock, Shield } from "lucide-react";
import bangui from "../../assets/bangui.jpg";
import banguiLogo from "../../assets/banguiLogo.jpg";

const SecretaryLogin = () => {
  return (
    <div className="min-h-screen flex">
    <div
      className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url(${bangui})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-12">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-blue-400/50 rounded-full blur-xl scale-110"></div>
            <div className="relative bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-2xl border border-white/20">
              <img
                src={banguiLogo}
                alt="Bangui Logo"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white/90 tracking-wide">
                Municipality of Bangui
              </h2>
              <div className="w-16 h-0.5 bg-white/60 mx-auto"></div>
            </div>

            <h1 className="text-5xl font-extrabold text-white leading-tight">
              Barangay Management System
            </h1>

            <div className="space-y-3">
              <p className="text-xl text-blue-100/90 font-medium">
                Republic of the Philippines
              </p>
            </div>
          </div>
        </div>

        {/* Side Pattern */}
        <div className="absolute right-0 top-0 h-full w-1 bg-white/20"></div>
      </div>

      {/* Right Side - Login Form (Enhanced) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Header */}
          <div className="text-center lg:hidden mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Barangay Portal
            </h1>
            <p className="text-gray-600">Republic of the Philippines</p>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username or Employee ID
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 transition-all duration-200 hover:border-gray-400"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 transition-all duration-200 hover:border-gray-400"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button className="text-sm text-blue-600 hover:text-blue-400 font-medium transition-colors duration-200">
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-lg font-medium text-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
              Sign In
            </button>
          </div>

          {/* Footer */}
          <div className="text-center pt-6 border-t border-gray-200">
            <div className="flex justify-center space-x-6 text-sm text-gray-500 mb-4">
              <button className="hover:text-gray-700 transition-colors duration-200">
                Help Center
              </button>
              <button className="hover:text-gray-700 transition-colors duration-200">
                Contact IT
              </button>
            </div>
            <p className="text-xs text-gray-400">
              © 2025 Barangay Management System. All rights reserved.
            </p>
            <p>test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretaryLogin;
