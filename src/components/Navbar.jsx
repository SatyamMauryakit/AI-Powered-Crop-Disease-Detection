import { Link } from "react-router-dom";
import { FaHome, FaCloudUploadAlt, FaLeaf, FaComments, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-green-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold flex items-center">
          <FaLeaf className="mr-2" /> AI Crop Disease Detection
        </h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="flex items-center hover:underline">
                <FaHome className="mr-1" /> Home
              </Link>
            </li>
            <li>
              <Link to="/upload" className="flex items-center hover:underline">
                <FaCloudUploadAlt className="mr-1" /> Upload
              </Link>
            </li>
            <li>
              <Link to="/diseases" className="flex items-center hover:underline">
                <FaLeaf className="mr-1" /> Diseases
              </Link>
            </li>
            <li>
              <Link to="/forum" className="flex items-center hover:underline">
                <FaComments className="mr-1" /> Forum
              </Link>
            </li>
          </ul>
        </nav>

        {/* User Authentication */}
        <div className="flex items-center space-x-4">
          <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Login
          </button>
          <button className="bg-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-green-600">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
