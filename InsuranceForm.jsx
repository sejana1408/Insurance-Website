import React, { useState } from "react";
import Card from "./components/ui/Card";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";

export default function InsuranceForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    gender: "",
    income: "",
    email: "",
    phone: "",
    insuranceType: "",
  });

  const getInsuranceType = (age, gender, income) => {
    if (age < 18) return "❌ No insurance available";

    let insurance =
      income < 20000
        ? "💰 Low-Income Health Insurance"
        : income < 50000
        ? "🏥 Basic Health & Life Insurance"
        : "💎 Premium Life & Property Insurance";

    insurance +=
      gender === "Male"
        ? ", 🚗 Car Insurance"
        : gender === "Female"
        ? ", 🏡 Home & Life Insurance"
        : ", 🌍 General Insurance";

    return insurance;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const insurance = getInsuranceType(
      parseInt(formData.age),
      formData.gender,
      parseInt(formData.income)
    );
    setFormData((prev) => ({ ...prev, insuranceType: insurance }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <Card className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-12 transform transition duration-300 hover:scale-105">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-10">🔍 Find Your Best Insurance</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col space-y-3">
            <label className="text-lg font-semibold font-sans">👤 Full Name</label>
            <Input name="name" value={formData.name} onChange={handleChange} required />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col space-y-3">
              <label className="text-lg font-semibold font-sans">🎂 Age</label>
              <Input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-lg font-semibold font-sans">📅 Date of Birth</label>
              <Input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <label className="text-lg font-semibold font-sans">⚧ Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Gender</option>
              <option value="Male">♂️ Male</option>
              <option value="Female">♀️ Female</option>
              <option value="Other">🌍 Other</option>
            </select>
          </div>
          
          <div className="flex flex-col space-y-3">
            <label className="text-lg font-semibold font-sans">💰 Annual Income</label>
            <Input type="number" name="income" value={formData.income} onChange={handleChange} required />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col space-y-3">
              <label className="text-lg font-semibold font-sans">📧 Email Address</label>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-lg font-semibold font-sans">📞 Phone Number</label>
              <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
          </div>

          <div className="mt-6">
            <Button type="submit" className="w-full text-lg py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">🔎 Find Insurance</Button>
          </div>
        </form>

        {formData.insuranceType && (
          <p className="mt-10 text-center font-semibold text-green-700 text-2xl bg-green-100 p-6 rounded-xl shadow-md">
            ✅ Recommended: {formData.insuranceType}
          </p>
        )}
      </Card>
    </div>
  );
}
