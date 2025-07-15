import React, { useState } from 'react';
import './trainingenquiryform.css'; // NEW: Import the CSS file for styling

const TrainingEnquiryForm = ({ syllabusPath, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    graduationYear: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errs.email = 'Invalid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^\+\d{1,4}\s\d{7,15}$/.test(formData.phone)) {
      errs.phone = 'Include country code (e.g. +91 9876543210)';
    }
    if (!formData.qualification.trim()) errs.qualification = 'Qualification is required';
    if (!formData.graduationYear.trim()) {
      errs.graduationYear = 'Graduation year is required';
    } else if (!/^\d{4}$/.test(formData.graduationYear)) {
      errs.graduationYear = 'Enter a valid year (e.g. 2023)';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    const response = await fetch('http://localhost:4000/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, syllabus: syllabusPath }),
    });

    if (!response.ok) {
      const errData = await response.json();
      alert("Error: " + (errData.message || 'Unable to download syllabus.'));
      return;
    }

    // Trigger file download from blob
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = syllabusPath;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(downloadUrl);

    onClose();
  } catch (err) {
    console.error('Error submitting form:', err);
    alert('Something went wrong. Please try again later.');
  }
};


  return (
    <form className="enquiry-form-popup" onSubmit={handleSubmit}>
      <h2 className="form-heading">Download Syllabus</h2>

      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number (e.g. +91 9876543210) *"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="qualification"
          placeholder="Educational Qualification *"
          value={formData.qualification}
          onChange={handleChange}
        />
        {errors.qualification && <span className="error">{errors.qualification}</span>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="graduationYear"
          placeholder="Year of Graduation *"
          value={formData.graduationYear}
          onChange={handleChange}
        />
        {errors.graduationYear && <span className="error">{errors.graduationYear}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" className="download-btn">Download</button>
        <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default TrainingEnquiryForm;
