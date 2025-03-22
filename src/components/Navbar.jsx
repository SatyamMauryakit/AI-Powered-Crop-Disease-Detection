import { Link } from 'react-router-dom';
const Navbar=()=> {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Crop Disease Detection</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/upload" className="hover:underline">Upload</Link></li>
            <li><Link to="/diseases" className="hover:underline">Diseases</Link></li>
            <li><Link to="/forum" className="hover:underline">Forum</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;