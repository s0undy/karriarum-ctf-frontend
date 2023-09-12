// NewScore.js
import React, { useState } from 'react';

const NewScore = () => {
  const [formData, setFormData] = useState({
    name: '',
    flags: '',
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
      const response = await fetch('http://localhost:4000/api/v1/score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          flags: parseInt(formData.flags), // Ensure flags is parsed as an integer
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
                <label htmlFor="playerName">Name:</label>
                <input
                    type="text"
                    id="playerName"
                    name="playerName"
                    value={formData.playerName}
                    onChange={handleInputChange}
                    required
                    className="equal-width-input" // Added class for equal width
                />
            </div>
            <div className="form-group">
                <label htmlFor="score">Flags:</label>
                <input
                    type="number"
                    id="score"
                    name="score"
                    value={formData.score}
                    onChange={handleInputChange}
                    required
                    className="equal-width-input" // Added class for equal width
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
