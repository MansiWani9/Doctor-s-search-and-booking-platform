import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Search() {
  const router = useRouter();
  const { location, specialization } = router.query;
  const [doctors, setDoctors] = useState([]);

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    if (location && specialization) {
      fetch(`${baseUrl}/api/doctors/search?location=${location}&specialization=${specialization}`)
        .then(res => res.json())
        .then(data => setDoctors(data));
    }
  }, [location, specialization]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {doctors.length} Dermatologists in {location}
      </h2>

      <div className="grid gap-6">
        {doctors.map(doc => (
          <div key={doc.id} className="bg-white p-6 rounded-xl shadow-md border">
            <h3 className="text-xl font-semibold text-blue-700">{doc.name}</h3>
            <p className="text-gray-700">{doc.specialization} • {doc.experience} years experience</p>
            <p className="text-gray-600 mt-1">📍 {doc.location}</p>
            <p className="text-gray-800 mt-2 font-medium">₹{doc.consultationFee} Consultation Fee</p>
            <p className="text-sm text-gray-500 mt-1">
              👍 {doc.rating}% | 📝 {doc.patientStories} Patient Stories
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
              Book Clinic Visit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

