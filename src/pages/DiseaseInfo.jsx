import { useEffect, useState } from 'react';
import axios from 'axios';

const DiseaseInfo = () => {
  const [diseases, setDiseases] = useState([]);  // Ensure default value is an array
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);  // Track errors

  useEffect(() => {
    axios.get('/api/diseases')
      .then((res) => {
        if (Array.isArray(res.data)) {
          setDiseases(res.data);
        } else {
          console.error("Unexpected API response:", res.data);
          setDiseases([]);  // Set empty array to avoid map error
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load disease information.");
      })
      .finally(() => setLoading(false)); // Stop loading
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Crop Disease Information</h2>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(diseases) && diseases.length > 0 ? (
          diseases.map((disease) => (
            <div key={disease._id} className="bg-white p-4 rounded shadow">
              <img 
                src={disease.imageUrl || 'https://placehold.co/300x200'} 
                alt={disease.name} 
                className="w-full h-auto mb-4" 
              />
              <h3 className="text-xl font-bold mb-2">{disease.name}</h3>
              <p>Affects: {disease.affectedCrops?.join(', ') || 'N/A'}</p>
              <p>Symptoms: {disease.symptoms || 'N/A'}</p>
              <p>Treatments: {disease.treatments || 'N/A'}</p>
            </div>
          ))
        ) : (
          !loading && <p className="text-center text-gray-500">No disease information available.</p>
        )}
      </div>
    </div>
  );
};

export default DiseaseInfo;
