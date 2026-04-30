import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { ZoomIn, ZoomOut, Loader2 } from 'lucide-react';

// Set local worker source (Vite compatible)
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const Resume = () => {
  const [scale, setScale] = useState(1.5);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);
  const renderTaskRef = useRef(null);

  const loadPdf = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('/resume.pdf');
      if (!response.ok) {
        throw new Error(`Failed to fetch resume.pdf: ${response.status} ${response.statusText}`);
      }
      
      const arrayBuffer = await response.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ 
        data: arrayBuffer,
        // Disable worker for simpler loading if CDN is failing
        stopAtErrors: true,
      });
      
      const pdf = await loadingTask.promise;
      setPdfDoc(pdf);
    } catch (err) {
      console.error('Error loading PDF:', err);
      setError(`Failed to load PDF: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const renderPage = useCallback(async () => {
    if (!pdfDoc || !canvasRef.current) return;

    // Cancel existing render task
    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
    }

    try {
      const page = await pdfDoc.getPage(1);
      const viewport = page.getViewport({ scale });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const dpr = window.devicePixelRatio || 1;
      canvas.width = viewport.width * dpr;
      canvas.height = viewport.height * dpr;
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      renderTaskRef.current = page.render(renderContext);
      await renderTaskRef.current.promise;
      renderTaskRef.current = null;
    } catch (err) {
      if (err.name !== 'RenderingCancelledException') {
        console.error('Render error:', err);
      }
    }
  }, [pdfDoc, scale]);

  useEffect(() => {
    loadPdf();
  }, [loadPdf]);

  useEffect(() => {
    renderPage();
  }, [renderPage]);

  const zoomIn = () => setScale(prev => Math.min(prev + 0.25, 3.0));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.75));

  return (
    <div className="resume-window-container">
      {/* Floating Zoom Controls */}
      <div className="resume-zoom-controls">
        <button onClick={zoomOut} className="resume-zoom-btn" disabled={isLoading}><ZoomOut size={16} /></button>
        <span className="resume-zoom-level">{Math.round(scale * 100)}%</span>
        <button onClick={zoomIn} className="resume-zoom-btn" disabled={isLoading}><ZoomIn size={16} /></button>
      </div>

      <div className="resume-scroll-area">
        {isLoading && (
          <div className="resume-loading">
            <Loader2 className="animate-spin" size={32} />
            <p>Loading Resume...</p>
          </div>
        )}
        
        {error && (
          <div className="resume-error">
            <p>{error}</p>
          </div>
        )}

        {!isLoading && !error && (
          <div className="resume-canvas-wrapper">
            <canvas ref={canvasRef} className="resume-canvas" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
