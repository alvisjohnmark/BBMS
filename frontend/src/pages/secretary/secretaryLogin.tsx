
import { User, Lock, Shield } from "lucide-react";

const SecretaryLogin = () => {
    return (
        <div className="min-h-screen flex">
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-800/20">
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <defs>
                    <pattern
                        id="grid"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                        opacity="0.1"
                        />
                    </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center p-12 text-center text-white">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-8">
                    <Shield className="w-16 h-16 text-white" />
                </div>
                <h1 className="text-4xl font-bold mb-4">
                Bangui Barangay Management System
                </h1>
                <p className="text-xl text-blue-100 mb-2">
                    Republic of the Philippines
                </p>
                <p className="text-blue-200 max-w-md">
                    Streamlining local governance through digital innovation and
                    community empowerment.
                </p>
            </div>

       
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
            <div className="w-full max-w-md space-y-8">
            {/* Mobile Header */}
            <div className="text-center lg:hidden mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">
                    Barangay Portal
                </h1>
                <p className="text-gray-600">Republic of the Philippines</p>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:block text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
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
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
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
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
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
                <button className="text-sm text-blue-600 hover:text-blue-400 font-medium">
                    Forgot password?
                </button>
                </div>

                {/* Login Button */}
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium text-lg">
                    Sign In
                </button>
            </div>

            {/* Footer */}
            <div className="text-center pt-6 border-t border-gray-200">
                <div className="flex justify-center space-x-6 text-sm text-gray-500 mb-4">
                <button>Help Center</button>
                <button>Contact IT</button>
                </div>
                <p className="text-xs text-gray-400">
                © 2025 Barangay Management System. All rights reserved.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
};
export default SecretaryLogin;
