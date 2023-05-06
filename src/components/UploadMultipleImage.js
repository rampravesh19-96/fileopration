import React, { useState } from 'react';

function UploadMultipleImage(props) {
const [images,setImages] = useState([])

const handleChange = (e) => {
    const files = e.target.files
    const reader = new FileReader()

    reader.onload = () => {
        setImages([...images,reader.result])
    }
    for(let i=0;i<files.length;i++){

        reader.readAsDataURL(files[i])
    }
}

    return (
        <div>
             <h2>Upload Multiple image</h2>
            <input type="file" onChange={handleChange} />
            <br />
            {images.map(image => <img src={image} />)}
            
        </div>
    );
}

export default UploadMultipleImage;