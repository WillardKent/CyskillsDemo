import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {

    Minus,
    Plus,
    Download,
} from "lucide-react";

import Modal from "../elements/Modal";
import Button from "../elements/Button";

// Required for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

type ReportPreviewModalProps = {
    isOpen: boolean;
    onClose: () => void;

    pdfUrl: string;
    fileName?: string;
};

export default function ReportPreviewModal({
    isOpen,
    onClose,
    pdfUrl,
    fileName = "report.pdf",
}: ReportPreviewModalProps) {
    const [numPages, setNumPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [scale, setScale] = useState(1);

    const handleDocumentLoad = ({
        numPages,
    }: {
        numPages: number;
    }) => {
        setNumPages(numPages);
        setCurrentPage(1);
    };

    const zoomIn = () => {
        setScale((prev) => Math.min(prev + 0.1, 2));
    };

    const zoomOut = () => {
        setScale((prev) => Math.max(prev - 0.1, 0.5));
    };

    const handleDownload = () => {
        const link = document.createElement("a");

        link.href = pdfUrl;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Report Preview"
            description={`${fileName} · ${numPages || 0} pages · PDF`}
            maxWidth="max-w-6xl"
            footer={
                <>
                    <Button
                        text="Close"
                        variant="white"
                        onClick={onClose}
                    />

                    <Button
                        text="Download"
                        variant="blue"
                        icon={Download}
                        onClick={handleDownload}
                    />
                </>
            }
        >
            <div className="flex h-150 overflow-hidden border-t border-gray-200">
                {/* SIDEBAR */}
                <div className="w-27.5 shrink-0 overflow-y-auto border-r border-gray-200 bg-gray-50 p-3">
                    <div className="flex flex-col gap-3">
                        {Array.from(
                            { length: numPages },
                            (_, index) => {
                                const pageNumber = index + 1;

                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() =>
                                            setCurrentPage(pageNumber)
                                        }
                                        className={`relative overflow-hidden rounded-lg border transition ${currentPage === pageNumber
                                            ? "border-gray-700 shadow-sm"
                                            : "border-gray-200 hover:border-gray-400"
                                            }`}
                                    >
                                        <div className="bg-white p-1">
                                            <Document file={pdfUrl}>
                                                <Page
                                                    pageNumber={pageNumber}
                                                    width={80}
                                                    renderTextLayer={false}
                                                    renderAnnotationLayer={false}
                                                />
                                            </Document>
                                        </div>

                                        <span className="absolute bottom-1 right-1 text-[10px] text-gray-500">
                                            {pageNumber}
                                        </span>
                                    </button>
                                );
                            }
                        )}
                    </div>
                </div>

                {/* MAIN VIEWER */}
                <div className="flex min-w-0 flex-1 flex-col bg-gray-100">
                    {/* TOOLBAR */}
                    <div className="flex h-14 shrink-0 items-center gap-3 border-b border-gray-200 bg-white px-5">
                        <button
                            type="button"
                            onClick={zoomOut}
                            disabled={scale <= 0.5}
                            className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Minus size={16} />
                        </button>

                        <span className="min-w-12.5 text-center text-sm font-medium text-gray-600">
                            {Math.round(scale * 100)}%
                        </span>

                        <button
                            type="button"
                            onClick={zoomIn}
                            disabled={scale >= 2}
                            className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Plus size={16} />
                        </button>

                        <div className="ml-auto text-sm text-gray-500">
                            Page {currentPage} of {numPages}
                        </div>
                    </div>

                    {/* PDF AREA */}
                    <div className="flex-1 overflow-auto p-8">
                        <div className="flex min-h-full justify-center">
                            <Document
                                file={pdfUrl}
                                onLoadSuccess={handleDocumentLoad}
                                loading={
                                    <div className="py-10 text-sm text-gray-500">
                                        Loading PDF...
                                    </div>
                                }
                                error={
                                    <div className="py-10 text-sm text-red-500">
                                        Failed to load PDF.
                                    </div>
                                }
                            >
                                <div className="shadow-xl">
                                    <Page
                                        pageNumber={currentPage}
                                        scale={scale}
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                    />
                                </div>
                            </Document>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}