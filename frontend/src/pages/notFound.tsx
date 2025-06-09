import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Main 404 Text */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-gray-900 mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            <Home size={20} />
            <Link to="/">
              {" "}
              <span>Go Home</span>
            </Link>
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
