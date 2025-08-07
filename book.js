import { useState } from 'react';
import { useRouter } from 'next/router';

export default function BookDoctor() {
  const { id } = useRouter().query;
  const [form, setForm] = useState({
    patientName: '',
    contact: '',
    appointmentDate: '',
    appointmentTime: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:8080/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, doctorId: id }),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
      {submitted ? (
        <p className="text-green-600">Appointment booked successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input type="text" name="patientName" placeholder="Your Name" className="border p-2" onChange={handleChange} required />
          <input type="text" name="contact" placeholder="Contact Number" className="border p-2" onChange={handleChange} required />
          <input type="date" name="appointmentDate" className="border p-2" onChange={handleChange} required />
          <input type="time" name="appointmentTime" className="border p-2" onChange={handleChange} required />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Confirm Booking
          </button>
        </form>
      )}
    </div>
  );
}
