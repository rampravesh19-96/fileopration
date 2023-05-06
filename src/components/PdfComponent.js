import React, { useState } from 'react';

function UploadPdf() {
  const [pdf, setPdf] = useState(null);

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPdf(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handlePdfChange} />
      {pdf && (
        <iframe
          title="PDF Viewer"
          src={pdf}
          width="100%"
          height="500px"
          style={{ border: 'none' }}
        />
      )}
    </div>
  );
}

export default UploadPdf;
