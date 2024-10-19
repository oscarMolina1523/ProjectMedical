// import { useEffect, useRef, useState } from "react";

// // Styles
// import "./QrStyless.css";

// // Qr Scanner
// import QrScanner from "qr-scanner";

// const QrReader = () => {
//   // QR States
//   const scanner = useRef<QrScanner>();
//   const videoEl = useRef<HTMLVideoElement>(null);
//   const qrBoxEl = useRef<HTMLDivElement>(null);
//   const [qrOn, setQrOn] = useState<boolean>(true);

//   // Result
//   const [scannedResult, setScannedResult] = useState<string | undefined>("");

//   // Success
//   const onScanSuccess = (result: QrScanner.ScanResult) => {
//     console.log(result); // Imprime el resultado en la consola
//     setScannedResult(result?.data); // Establece el resultado escaneado
//   };

//   // Fail
//   const onScanFail = (err: string | Error) => {
//     console.log(err); // Imprime el error en la consola
//   };

//   useEffect(() => {
//     if (videoEl?.current && !scanner.current) {
//       // Instanciar el QR Scanner
//       scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
//         onDecodeError: onScanFail,
//         preferredCamera: "environment", // Usar la cámara trasera en dispositivos móviles
//         highlightScanRegion: true, // Resaltar la región de escaneo
//         highlightCodeOutline: true, // Resaltar el contorno del código QR
//         overlay: qrBoxEl.current || undefined, // Div personalizada para la región de escaneo
//       });

//       // Iniciar QR Scanner
//       scanner.current
//         .start()
//         .then(() => setQrOn(true))
//         .catch((err) => {
//           if (err) setQrOn(false);
//         });
//     }

//     // Limpieza al desmontar
//     return () => {
//       scanner.current?.stop(); // Detener el escáner si está activo
//     };
//   }, []);

//   // Verificar permisos de la cámara
//   useEffect(() => {
//     if (!qrOn)
//       alert("Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload.");
//   }, [qrOn]);

//   return (
//     <div className="qr-reader">
//       <video ref={videoEl} style={{ width: "100%", height: "auto" }}></video>
//       <div 
//         ref={qrBoxEl} 
//         className="qr-box" 
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           width: "256px", // Ajusta el tamaño según sea necesario
//           height: "256px", // Ajusta el tamaño según sea necesario
//           transform: "translate(-50%, -50%)", // Centrar el cuadro
//           border: "2px dashed #fff", // Estilo del contorno del cuadro de escaneo
//           zIndex: 10,
//         }}
//       />

//       {/* Mostrar el resultado escaneado si se tiene éxito */}
//       {scannedResult && (
//         <p
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             zIndex: 99999,
//             color: "white",
//           }}
//         >
//           Scanned Result: {scannedResult}
//         </p>
//       )}
//     </div>
//   );
// };

// export default QrReader;
import { useEffect, useRef, useState } from 'react';

// Styles
import './QrStyless.css';

// ZXing Barcode Scanner
import { BrowserMultiFormatReader } from '@zxing/library';

const BarcodeReader = () => {
  // States
  const videoEl = useRef<HTMLVideoElement>(null);
  const [scannedResult, setScannedResult] = useState<string | undefined>("");

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    if (videoEl.current) {
      codeReader
        .decodeFromVideoDevice(null, videoEl.current, (result, err) => {
          if (result) {
            setScannedResult(result.getText()); // Establece el resultado escaneado
            codeReader.reset(); // Resetea el lector después de escanear
          }
          if (err && !(err instanceof Error)) {
            console.error(err);
          }
        })
        .catch(err => {
          console.error(err);
        });
    }

    // Limpieza al desmontar
    return () => {
      codeReader.reset();
    };
  }, []);

  return (
    <div className="barcode-reader">
      <video ref={videoEl} style={{ width: '100%', height: 'auto' }}></video>

      {/* Mostrar el resultado escaneado si se tiene éxito */}
      {scannedResult && (
        <p
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 99999,
            color: 'white',
          }}
        >
          Scanned Result: {scannedResult}
        </p>
      )}
    </div>
  );
};

export default BarcodeReader;
