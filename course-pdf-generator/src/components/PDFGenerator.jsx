import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { MyDocument } from './MyDocument';
const data = [
  ['1-1', '1-2', '1-3', '1-4'],
  ['2-1', '2-2', '2-3', '2-4'],
  ['3-1', '3-2', '3-3', '3-4'],
  ['4-1', '4-2', '4-3', '4-4'],
];

 const PDFGenerator = () => (
 <div>
    <PDFDownloadLink document={ <MyDocument data={data} />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF'
      }
    </PDFDownloadLink>
  </div>
);

export default PDFGenerator;
