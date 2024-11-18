'use client'

import { FiDownload } from 'react-icons/fi'
import { useState } from 'react'

export default function PDFDownloadButton() {
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadPDF = async () => {
        try {
            setIsDownloading(true);
            const response = await fetch('/NihatBerkÖZCV.pdf');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Nihat_Berk_OZ_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('PDF indirilirken hata:', error);
            alert('PDF indirilirken bir hata oluştu.');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="fixed bottom-8 right-8">
            <button
                onClick={downloadPDF}
                disabled={isDownloading}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <FiDownload className="w-5 h-5" />
                {isDownloading ? 'İndiriliyor...' : 'PDF İndir'}
            </button>
        </div>
    );
}