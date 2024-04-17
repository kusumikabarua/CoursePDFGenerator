import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { MyDocument } from './MyDocument';

 const PDFGenerator = ({ name,course,filename }) => (
 <div>
    <PDFDownloadLink document={ <MyDocument name ={name} course={course}  />} fileName={filename}>
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF'
      }
    </PDFDownloadLink>
  </div>
);

export default PDFGenerator;
