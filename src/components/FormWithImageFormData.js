import axios from 'axios';
import React from 'react';

function FormWithImageFormData(props) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData()
    formdata.append('name',e.target.name.value)
    formdata.append('email',e.target.email.value)
    formdata.append('address',e.target.address.value)
    formdata.append('image',e.target.image.files[0])
    
    console.log(formdata.get('name'));
    console.log(formdata.get('email'));
    console.log(formdata.get('address'));
    console.log(formdata.get('image'));

    fetch("https://example.com/submit-form",{method:'POST',body:formdata})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

    axios.post("https://example.com/submit-form",formdata)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

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

export default FormWithImageFormData;
