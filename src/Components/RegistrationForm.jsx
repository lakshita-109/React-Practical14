
import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    course: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData({ ...formData });
  }

  return (
    <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
      <h1 className="mb-2 text-center text-3xl font-bold text-indigo-700">
        Student Registration
      </h1>

      <p className="mb-6 text-center text-slate-500">
        Please enter your details
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2"
          >
            <option value="">Select gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Course
          </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2"
          >
            <option value="">Select course</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="B.Com">B.Com</option>
            <option value="B.Sc">B.Sc</option>
            <option value="MCA">MCA</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Register Student
        </button>
      </form>

      {submittedData && (
        <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-5">
          <h2 className="mb-4 text-xl font-bold text-green-800">
            Registration Successful!
          </h2>

          <div className="space-y-2 text-slate-700">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
            <p><strong>Gender:</strong> {submittedData.gender}</p>
            <p><strong>Course:</strong> {submittedData.course}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;