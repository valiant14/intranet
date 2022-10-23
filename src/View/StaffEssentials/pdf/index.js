import React from 'react'

import { PDFViewer } from 'react-view-pdf';

const ExamplePDFViewer = () => {
    return (
        // <PDFViewer
        //     document={{
        //         url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
        //     }}
        // />
        <PDFViewer url="http://www.africau.edu/images/default/sample.pdf" />
    )
}

export default ExamplePDFViewer