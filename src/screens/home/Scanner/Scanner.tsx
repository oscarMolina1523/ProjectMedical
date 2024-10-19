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


import { useEffect, useRef, useState } from "react";
import axios from "axios"; // Asegúrate de tener axios instalado
import "./QrStyless.css";
import QrScanner from "qr-scanner";

const QrReader = () => {
  // QR States
  const scanner = useRef<QrScanner>();
  const videoEl = useRef<HTMLVideoElement>(null);
  const qrBoxEl = useRef<HTMLDivElement>(null);
  const [qrOn, setQrOn] = useState<boolean>(true);
  const [scannedResult, setScannedResult] = useState<string | undefined>("");
  const [ingredients, setIngredients] = useState<string | null>(null);

  // Success
  const onScanSuccess = async (result: QrScanner.ScanResult) => {
    console.log(result); // Imprime el resultado en la consola
    setScannedResult(result?.data); // Establece el resultado escaneado
    await fetchProductIngredients(result?.data); // Llama a la función para obtener ingredientes
  };

  // Fail
  const onScanFail = (err: string | Error) => {
    console.log(err); // Imprime el error en la consola
  };

  const fetchProductIngredients = async (barcode: string) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${barcode}`);
      const product = response.data;
      // Aquí asumimos que la respuesta incluye un campo de ingredientes
      setIngredients(product.ingredients || "No ingredients found."); // Ajusta según la estructura real
    } catch (error) {
      console.error("Error fetching ingredients:", error);
      setIngredients("Failed to fetch ingredients.");
    }
  };

  useEffect(() => {
    if (videoEl?.current && !scanner.current) {
      // Instanciar el QR Scanner
      scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
        onDecodeError: onScanFail,
        preferredCamera: "environment",
        highlightScanRegion: true,
        highlightCodeOutline: true,
        overlay: qrBoxEl.current || undefined,
      });

      // Iniciar QR Scanner
      scanner.current
        .start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    // Limpieza al desmontar
    return () => {
      scanner.current?.stop(); // Detener el escáner si está activo
    };
  }, []);

  // Verificar permisos de la cámara
  useEffect(() => {
    if (!qrOn)
      alert("Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload.");
  }, [qrOn]);

  return (
    <div className="qr-reader">
      <video ref={videoEl} style={{ width: "100%", height: "auto" }}></video>
      <div 
        ref={qrBoxEl} 
        className="qr-box" 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "256px",
          height: "256px",
          transform: "translate(-50%, -50%)",
          border: "2px dashed #fff",
          zIndex: 10,
        }}
      />
      {/* Mostrar el resultado escaneado si se tiene éxito */}
      {scannedResult && (
        <p
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 99999,
            color: "white",
          }}
        >
          Scanned Result: {scannedResult}
        </p>
      )}
      {/* Mostrar los ingredientes del producto */}
      {ingredients && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 99999,
            color: "white",
          }}
        >
          <h4>Ingredients:</h4>
          <p>{ingredients}</p>
        </div>
      )}
    </div>
  );
};

export default QrReader;
