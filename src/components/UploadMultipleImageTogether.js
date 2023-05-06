// UploadMultipleImageTogether
import React, { useState } from 'react';

function UploadMultipleImageTogether(props) {
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const files = e.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);

      reader.onload = () => {
        newImages.push(reader.result);
        if (newImages.length === files.length) {
          setImages([...images, ...newImages]);
        }
      };
    }
  };

  const handleUpload = () => {
    console.log(images); // here you can handle the upload logic for the images
  };

  return (
    <div>
         <h2>Upload Multiple image together from file</h2>
      <input type="file" multiple onChange={handleChange} />
      <br />
      <button onClick={handleUpload}>Upload Images</button>
      <br />
      {images.map((image, index) => (
        <img key={index} src={image} alt={`image-${index}`} />
      ))}
    </div>
  );
}

export default UploadMultipleImageTogether;
