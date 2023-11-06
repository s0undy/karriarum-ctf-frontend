// NewScore.js
import React, { useState } from 'react';

const NewScore = () => {
  const [formData, setFormData] = useState({
    name: '',
    flags: '',
    email: '',
    mobileNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://karriarum-ctf-backend:4000/api/v1/score`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          flags: parseInt(formData.flags),
          email: formData.email,
          mobilenumber: formData.mobileNumber
        }),
      });
  
      if (response.ok) {
        // Handle successful response (e.g., show a success message)
        console.log('Data posted successfully');
      } else {
        // Handle error response (e.g., show an error message)
        console.error('Failed to post data');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred', error);
    }
  };

  return (
    <div className="center-container">
        <div className='form-container'>
            <h2 className="heading-with-padding">Add New Score</h2>
            <form onSubmit={handleSubmit} className="center-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="equal-width-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="flags">Flags:</label>
                <input
                    type="number"
                    id="flags"
                    name="flags"
                    value={formData.flags}
                    onChange={handleInputChange}
                    required
                    className="equal-width-input" 
                />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="equal-width-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
                className="equal-width-input"
              />
            </div>
            <div className="form-group">
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    </div>
  );
};

export default NewScore;
