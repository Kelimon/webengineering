import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface CanvasDialogProps {
    setOpenCanvasDialog: Dispatch<SetStateAction<boolean>>;
    
    openCanvasDialog: boolean;

}

const CanvasDialog: React.FC<CanvasDialogProps> = ({setOpenCanvasDialog, openCanvasDialog}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [clearCanvas, setClearCanvas] = useState<(() => void) | undefined>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    const context = canvas.getContext('2d');
    if (context === null) return;

    let drawing = false;

    const startDrawing = (event: MouseEvent | TouchEvent) => {
      drawing = true;
      draw(event);
    };

    const draw = (event: MouseEvent | TouchEvent) => {
        if (!drawing) return;
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
        const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
      
        const rect = canvas.getBoundingClientRect();
      
        context.lineWidth = 5;
        context.lineCap = 'round';
        context.strokeStyle = 'black';
      
        context.lineTo(clientX - rect.left, clientY - rect.top);
        context.stroke();
        context.beginPath();
        context.moveTo(clientX - rect.left, clientY - rect.top);
      };

    const stopDrawing = () => {
      if (!drawing) return;
      drawing = false;
      context.beginPath();
    };

    const clearCanvasFunc = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    setClearCanvas(() => clearCanvasFunc);

    const saveSignature = () => {
      const dataUrl = canvas.toDataURL();
      // Nun können Sie dataUrl in einem <img>-Tag verwenden, um die Unterschrift anzuzeigen
      // oder in einer Datenbank speichern, oder was immer Sie mit der Unterschrift tun möchten.
    };

    // Adding the event listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);

    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);

    // Cleanup function to remove the event listeners when the component unmounts
    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);

      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('touchmove', draw);
      canvas.removeEventListener('touchend', stopDrawing);
    };
  }, []);

  //if (!clearCanvas) return null;  // Oder irgendeine andere Loader-Komponente

  return (<>
  <Dialog
        open={openCanvasDialog}
        onClose={() => {
          setOpenCanvasDialog(false);
        }}
        sx={{
          top: "-210px",
          left: "600px",
        }}
      >
        <DialogTitle sx={{ backgroundColor: "lightblue" }}>Canvas</DialogTitle>
        <canvas ref={canvasRef} id="signature-canvas" width="500" height="200"></canvas>
        

        <DialogActions sx={{ backgroundColor: "lightblue" }}>
          <Button
            onClick={() => {
              setOpenCanvasDialog(false);
            }}
          >
            Zurück
          </Button>
          <Button
            onClick={clearCanvas}
          >
            Clear
          </Button>
        </DialogActions>
      </Dialog></>);
};

export default CanvasDialog;
