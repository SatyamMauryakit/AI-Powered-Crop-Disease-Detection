import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UploadPage from './pages/UploadPage';
import DiseaseInfo from './pages/DiseaseInfo';
import Forum from './pages/Forum';
import Footer from './components/Footer';
import './App.css';



function App() {
  return (
    <Router>
      <div className="bg-gray-100 font-roboto min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/diseases" element={<DiseaseInfo />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;