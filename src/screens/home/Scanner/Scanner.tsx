import QrScanner from "qr-scanner";
import { useEffect, useRef, useState } from "react";

const QrReader = () => {
  const scanner = useRef<QrScanner>();
  const videoEl = useRef<HTMLVideoElement>(null);
  const qrBoxEl = useRef<HTMLDivElement>(null);
  const [qrOn, setQrOn] = useState(false); // Estado inicial "false" para el escaneo
  const [scannedResult, setScannedResult] = useState<string | undefined>("");

  const onScanSuccess = (result: QrScanner.ScanResult) => {
    console.log(result);
    setScannedResult(result?.data);
  };

  const onScanFail = (err: string | Error) => {
    console.log(err);
  };

  const startQrScanner = () => {
    if (videoEl?.current && !scanner.current) {
      scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
        onDecodeError: onScanFail,
        preferredCamera: "environment",
        highlightScanRegion: true,
        highlightCodeOutline: true,
        overlay: qrBoxEl?.current || undefined,
      });

      scanner?.current
        ?.start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }
  };

  useEffect(() => {
    if (!qrOn && scanner.current) {
      scanner.current.stop();
    }
  }, [qrOn]);

  return (
    <div className="qr-reader">
      <button onClick={startQrScanner}>Iniciar QR Scanner</button> {/* Botón para iniciar el escaneo */}

      {qrOn && (
        <div>
          <video ref={videoEl}></video>
          <div ref={qrBoxEl} className="qr-box"></div> {/* Caja para el área de escaneo */}

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
        </div>
      )}
    </div>
  );
};

export default QrReader;
