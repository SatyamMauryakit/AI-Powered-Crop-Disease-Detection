import { useState } from 'react';
import axios from 'axios';

function UploadPage() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('image', file);
    const res = await axios.post('/api/upload', formData);
    setResult(res.data);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-3xl font-bold mb-6">Upload Image to Detect Disease</h2>
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <div className="border-dashed border-4 border-gray-300 p-6 text-center">
          <p className="mb-4">Drag and drop your image here</p>
          <input type="file" onChange={handleFileChange} className="hidden" id="file-upload" />
          <label htmlFor="file-upload" className="cursor-pointer bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Choose File
          </label>
        </div>
        {file && (
          <div className="mt-4">
            <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-auto mb-4" />
            <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
              Submit for Analysis
            </button>
          </div>
        )}
        {loading && (
          <div className="mt-4 text-center">
            <i className="fas fa-spinner fa-spin text-4xl text-green-600"></i>
            <p className="mt-2">Processing...</p>
          </div>
        )}
        {result && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <h3 className="text-xl font-bold mb-2">Detection Result</h3>
            <p><strong>Disease:</strong> {result.disease}</p>
            <p><strong>Confidence Score:</strong> {result.confidence}</p>
            <p><strong>Suggested Remedies:</strong> {result.remedies}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadPage;