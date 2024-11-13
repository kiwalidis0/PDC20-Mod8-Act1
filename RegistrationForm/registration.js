import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', dob: '', gender: '', email: '', phone: '',
    address: '', city: '', studentId: '', program: '', yearLevel: '', gpa: '',
    hobbies: '', skills: '', notes: '',
  });

  const [errors, setErrors] = useState({
    firstName: '', email: '', studentId: '',
  });

  const [showAlert, setShowAlert] = useState(false);  // State to control alert visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!formData.studentId) {
      newErrors.studentId = 'Student ID is required';
      isValid = false;
    }

    setErrors(newErrors);

    // Show alert if validation fails
    if (!isValid) {
      setShowAlert(true);
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      setShowAlert(false);  // Reset alert if submission is successful
    } else {
      console.log('Form has errors, please correct them before submitting');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="tab-content">
            <label>
              First Name:
              <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </label>
            <label>
              Last Name:
              <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
              />
            </label>
            <label>
              Date of Birth:
              <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
              />
            </label>
            <label>
              Gender:
              <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
        );
      case 'contact':
        return (
          <div className="tab-content">
            <label>
              Email:
              <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </label>
            <label>
              Phone Number:
              <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
              />
            </label>
            <label>
              Address:
              <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
              />
            </label>
            <label>
              City:
              <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
              />
            </label>
          </div>
        );
      case 'academic':
        return (
          <div className="tab-content">
            <label>
              Student ID:
              <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
              />
              {errors.studentId && <p className="error">{errors.studentId}</p>}
            </label>
            <label>
              Program:
              <input
                    type="text"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
              />
            </label>
            <label>
              Year Level:
              <input
                    type="number"
                    name="yearLevel"
                    value={formData.yearLevel}
                    onChange={handleInputChange}
              />
            </label>
            <label>
              GPA:
              <input
                    type="number"
                    name="gpa"
                    step="0.01"
                    value={formData.gpa}
                    onChange={handleInputChange}
              />
            </label>
          </div>
        );
      case 'additional':
        return (
          <div className="tab-content">
            <label>
              Hobbies:
              <input
                    type="text"
                    name="hobbies"
                    value={formData.hobbies}
                    onChange={handleInputChange}
              />
            </label>
            <label>
              Skills:
              <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
              />
            </label>
            <label>
              Other Notes:
              <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
              />
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>

      {showAlert && (
        <div className="alert">
          <strong>Warning:</strong> Please fill in all required fields (First Name, Email, Student ID).
        </div>
      )}

      <div className="tabs">
        <button
          onClick={() => handleTabChange('personal')}
          className={activeTab === 'personal' ? 'active' : ''}
        >
          Personal Information
        </button>
        <button
          onClick={() => handleTabChange('contact')}
          className={activeTab === 'contact' ? 'active' : ''}
        >
          Contact Information
        </button>
        <button
          onClick={() => handleTabChange('academic')}
          className={activeTab === 'academic' ? 'active' : ''}
        >
          Academic Information
        </button>
        <button
          onClick={() => handleTabChange('additional')}
          className={activeTab === 'additional' ? 'active' : ''}
        >
          Additional Details
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {renderTabContent()}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
