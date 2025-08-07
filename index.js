import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/search?location=${location}&specialization=${specialty}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-800 text-white px-4">
      <h1 className="text-4xl font-bold mb-4">Your home for health</h1>
      <div className="bg-white text-black rounded-lg p-4 shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Enter location"
          className="w-full p-2 mb-2 border"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search specialty"
          className="w-full p-2 mb-2 border"
          value={specialty}
          onChange={e => setSpecialty(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
