import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Register() {
  const navigate=useNavigate()
   const [document, setDocument] = useState(null);
  const [formData, setFormData] = useState({
    companyName: "",
    companyType: "",
    industry: "",
    logo: null,
    establishedDate: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    billingAddress: "",
    taxNumber: "",
    registrationNumber: "",
    authorizedPerson: "",
    documents: null,
    username: "",
    password: "",
    communicationMethod:'',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
alert("Company Registered");
  navigate("/login");
  const fd = new FormData();

  // Append all text fields
  Object.keys(formData).forEach(key => {
    fd.append(key, formData[key]);
  });

  // Append file
  if (document) {
    fd.append("documents", document);   // MUST MATCH backend
  }

  await axios.post("https://unnati-4zdq.onrender.com/register", fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  
};


  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Company Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="companyType"
              placeholder="Company Type"
              value={formData.companyType}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="industry"
              placeholder="Industry"
              value={formData.industry}
              onChange={handleChange}
              required
              className="border w-[720px] border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p></p>
          <label className="block font-medium mb-1" htmlFor="documents">
  Upload Registration Documents
  <p className="text-gray-500 text-sm mt-1">
  Please upload your Certificate of Incorporation or Business Registration Document (PDF or image).
</p>
</label>

<input
  type="file"
  id="documents"
  name="documents"
  onChange={handleChange}
  required
  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
/>


          <label className="block font-medium mb-1" htmlFor="establishedDate">
  Date of Establishment
</label>
<input
  type="date"
  id="establishedDate"
  name="establishedDate"
  value={formData.establishedDate}
  onChange={handleChange}
  required
  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="url"
              name="website"
              placeholder="Website URL"
              value={formData.website}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="address"
              placeholder="Physical Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="billingAddress"
              placeholder="Billing Address"
              value={formData.billingAddress}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Legal & Verification */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Legal & Verification</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="taxNumber"
              placeholder="Tax / GST Number"
              value={formData.taxNumber}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="registrationNumber"
              placeholder="Company Registration Number"
              value={formData.registrationNumber}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="authorizedPerson"
              placeholder="Authorized Representative Name & Title"
              value={formData.authorizedPerson}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
             <input type="file"  onChange={(e) => setDocument(e.target.files[0])} required name="documents" formEncType="multipart/form-data"  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
           <input type="file" name="documents" onChange={(e) => setDocument(e.target.files[0])} />

          </div>
        </div>

        {/* Account Details */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Account Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <p className="mt-2">preffered communication Method</p>
            <select
              name="communicationMethod"
              value={formData.communicationMethod}
              onChange={handleChange}
            
             
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
             
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="portal">Portal Notifications</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Register Company
        </button>
      </form>
    </div>
  );
}

export default Register;
