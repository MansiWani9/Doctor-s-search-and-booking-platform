import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DoctorDetail() {
  const { id } = useRouter().query;
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/api/doctors/${id}`)
        .then(res => res.json())
        .then(data => setDoctor(data));
    }
  }, [id]);

  if (!doctor) return <p className="p-4">Loading doctor info...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{doctor.name}</h1>
      <p className="text-gray-700">{doctor.specialization}</p>
      <p className="mt-1">📍 {doctor.location}</p>
      <p>🩺 {doctor.experience} years of experience</p>
      <p>💰 ₹{doctor.consultationFee} Consultation Fee</p>
      <p>👍 {doctor.rating}% | 📝 {doctor.patientStories} Stories</p>
      <Link href={`/book/${doctor.id}`}>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Book Appointment
        </button>
      </Link>
    </div>
  );
}
