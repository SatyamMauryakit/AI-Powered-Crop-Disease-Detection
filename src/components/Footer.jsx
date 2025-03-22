import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-6">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* About */}
          <div>
            <h2 className="text-xl font-bold mb-2">About Us</h2>
            <p className="text-sm">
              AI-Powered Crop Disease Detection helps farmers identify and treat
              crop diseases using advanced AI technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="flex items-center justify-center md:justify-start">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
              support@cropai.com
            </p>
            <p className="flex items-center justify-center md:justify-start mt-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> +91 9876543210
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-between items-center mt-6 border-t border-white pt-4">
          <p className="text-sm">
            © 2025 AI-Powered Crop Disease Detection. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white text-lg">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-white text-lg">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white text-lg">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-white text-lg">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
