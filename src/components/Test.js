import React, { useState } from 'react';

function Test(props) {
    const [images,setImages] = useState([])
    const handleImageChange = (e) => {
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
            <input type="file" multiple onChange={handleImageChange} />
            <br />
            {images.map(image => <img src={image} />)}
        </div>
    );
}

export default Test;