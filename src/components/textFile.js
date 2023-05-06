import React, { useState } from 'react';

function TextFileReader() {
  const [fileContents, setFileContents] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      setFileContents(event.target.result);
    };
    
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      {fileContents && <div>{fileContents}</div>}
    </div>
  );
}

export default TextFileReader;
