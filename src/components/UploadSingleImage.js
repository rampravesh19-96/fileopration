import React, { useState } from 'react';

function UploadSingleImage(props) {
    const [image,setImage] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.onload = () => {
            setImage(reader.result)
        }

        reader.readAsDataURL(file)
    }
    return (
        <div>
            <h2>Upload Single image</h2>
            <input type="file" onChange={handleImageChange} />
            <br />
            <img src={image} alt="" />
        </div>
    );
}

export default UploadSingleImage;