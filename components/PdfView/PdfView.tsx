'use client';
import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PdfViewProps {
    url: string;
}

const PdfView = ({ url }: PdfViewProps) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <>
            {url ? (
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        height: '130%',
                        width: '100%',
                    }}>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <Viewer
                            plugins={[defaultLayoutPluginInstance]}
                            fileUrl={url}
                        />
                    </Worker>
                </div>
            ) : (
                <div
                    style={{
                        border: '2px dashed rgba(0, 0, 0, .3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '130%',
                    }}>
                    Preview area
                </div>
            )}
        </>
    );
};

export default PdfView;
