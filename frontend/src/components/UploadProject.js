import React, { useState } from 'react';
import './UploadProject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const UploadProject = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
  
    if (selectedFile && !['image/jpeg', 'image/png', 'application/pdf', 'application/zip'].includes(selectedFile.type)) {
      setError('Invalid file type. Please upload an image, document, or zip file.');
      setFile(null);
    } else {
      setError('');
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("file-type", e.target["file-type"].value);
    formData.append("file", file);
    formData.append("message", e.target.message.value);

    fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formData,
    })
    .then((response) => response.text())
    .then((data) => {
        setMessage("File uploaded successfully!");
        setFile(null); 
        setError(''); 
    })
    .catch((error) => {
        setError("Error uploading file. Please try again.");
        console.error("Error:", error);
    });
  };

  return (
    <div className="file-upload-form">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <FontAwesomeIcon icon={faPaperPlane} className="form-icon" />
          <h2>Send us your Files!</h2>
        </div>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="file-type">Select your file types</label>
          <select id="file-type" name="file-type" required>
            <option value="">Please Select</option>
            <option value="image">Image</option>
            <option value="document">Document</option>
            <option value="zip">Zip</option>
            <option value="video">Video</option>
          </select>
        </div>

        <div className="form-group file-upload">
          <label htmlFor="file-upload" className="file-upload-label">
            <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" />
            <span>Upload a photo</span>
            <small>Drag and drop files here</small>
          </label>
          <input
            type="file"
            id="file-upload"
            className="file-upload-input"
            onChange={handleFileChange}
            required
          />
          {file && <p className="file-name">{file.name}</p>}
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>

        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>

        {message && <p className="success-message">{message}</p>}
      </form>
    </div>
  );
};

export default UploadProject;