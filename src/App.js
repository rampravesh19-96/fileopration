import React from 'react';
import UploadSingleImage from './components/UploadSingleImage';
import { Route, Routes } from 'react-router-dom';
import UploadMultipleImage from './components/UploadMultipleImage';
import UploadMultipleImageTogether from './components/UploadMultipleImageTogether';
import Dashboard from './components/Dashboard';
import UploadPdf from './components/PdfComponent';
import TextFileReader from './components/textFile';
import FormWithImage from './components/FormWithImage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/formwithimage' element={<FormWithImage/>}/>
      <Route path='/txtfile' element={<TextFileReader/>}/>
      <Route path='/pdf' element={<UploadPdf/>}/>
      <Route path='/singleimg' element={<UploadSingleImage/>}/>
      <Route path='/multipleimg' element={<UploadMultipleImage/>}/>
      <Route path='/multipleimgtogether' element={<UploadMultipleImageTogether/>}/>
    </Routes>
  );
}

export default App;