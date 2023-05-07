import axios from 'axios';
import React from 'react';

function FormWithImageJSONData(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const data = {
          name: e.target.name.value,
          email: e.target.email.value,
          address: e.target.address.value,
          image: e.target.image.files[0],
        };
      
        console.log(data);
      
        fetch("https://example.com/submit-form", {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
      
        axios.post("https://example.com/submit-form", data)
          .then(response => console.log(response.data))
          .catch(error => console.log(error));
      };
      

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name='name' />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name='email' />
      </div>
      <div>
        <label>Address:</label>
        <textarea name='address'></textarea>
      </div>
      <div>
        <label>Images:</label>
        <input type="file" accept="image/*" name='image' />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormWithImageJSONData;
