import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faLeaf, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
const Home=()=> {
    return (
      <>
        <section
          className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://cdn.create.vista.com/api/media/small/664732238/stock-photo-asian-farmer-checking-quality-tablet-agriculture-modern-technology-growing-corn')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">AI-Powered Crop Disease Detection</h2>
            <a href="/upload" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Upload Image to Detect Disease
            </a>
          </div>
        </section>
        <section className="py-12">
        <section class="py-12">
    <div class="container mx-auto text-center">
     <h2 class="text-3xl font-bold mb-8">
      Features
     </h2>
     <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="p-6 bg-white rounded shadow">
      <FontAwesomeIcon icon={faBrain} className="text-4xl text-green-600 mb-4" />
       <h3 class="text-xl font-bold mb-2">
        AI Accuracy
       </h3>
       <p>
        Our AI model provides highly accurate disease detection.
       </p>
      </div>
      <div class="p-6 bg-white rounded shadow">
      <FontAwesomeIcon icon={faLeaf} className="text-4xl text-green-600 mb-4" />
       <h3 class="text-xl font-bold mb-2">
        Wide Range of Diseases
       </h3>
       <p>
        Detects a wide range of crop diseases with ease.
       </p>
      </div>
      <div class="p-6 bg-white rounded shadow">
      <FontAwesomeIcon icon={faMobileAlt} className="text-4xl text-green-600 mb-4" />
       <h3 class="text-xl font-bold mb-2">
        Mobile Friendly
       </h3>
       <p>
        Use our system on any device, anywhere.
       </p>
      </div>
     </div>
    </div>
   </section>
        </section>
        <section class="py-12 bg-gray-200">
    <div class="container mx-auto text-center">
     <h2 class="text-3xl font-bold mb-8">
      Testimonials
     </h2>
     <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="p-6 bg-white rounded shadow">
       <img alt="Portrait of a satisfied user 1" class="rounded-full mx-auto mb-4" src="https://placehold.co/100x100?text=User+1"/>
       <p class="italic">
        "This system saved my crops! Highly recommend."
       </p>
       <h3 class="text-xl font-bold mt-4">
        John Doe
       </h3>
      </div>
      <div class="p-6 bg-white rounded shadow">
       <img alt="Portrait of a satisfied user 2" class="rounded-full mx-auto mb-4" src="https://placehold.co/100x100?text=User+2"/>
       <p class="italic">
        "Accurate and easy to use. A must-have for farmers."
       </p>
       <h3 class="text-xl font-bold mt-4">
        Jane Smith
       </h3>
      </div>
      <div class="p-6 bg-white rounded shadow">
       <img alt="Portrait of a satisfied user 3" class="rounded-full mx-auto mb-4" src="https://placehold.co/100x100?text=User+3"/>
       <p class="italic">
        "Helped me identify diseases early and save my yield."
       </p>
       <h3 class="text-xl font-bold mt-4">
        Alice Johnson
       </h3>
      </div>
     </div>
    </div>
   </section>
      </>
    );
  }
  
  export default Home;