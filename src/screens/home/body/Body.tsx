import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import React, { useState } from "react";
import QrReader from "../Scanner/Scanner";

interface BodyHomeProps {
  onFormClick: () => void;
}

const BodyHome: React.FC<BodyHomeProps> = ({ onFormClick }) => {

  const [showScanner, setShowScanner] = useState(false);

  const handleShowScanner = () => {
    setShowScanner(true); // Mostrar el escáner al hacer clic en el botón
  };

  return (
    <div className="flex flex-col p-2 gap-4">
      <Card>
        <CardContent>
          <img
            src="https://img.freepik.com/vector-premium/hombre-joven-al-que-gusta-cuidar-su-piel-cuidado-piel-hombre-joven-que-aplica-toner-piel-cara_10045-420.jpg"
            alt="cuidado de piel"
          />
        </CardContent>
        <CardFooter>
          <p>"El cuidado de la piel es muy improtamte ya que
            es el organo mas grande de nuestro cuerpo"</p>
        </CardFooter>
      </Card>
      <Card>
        <CardDescription className="p-2">Completa el formulario para seguir cuidando tu piel</CardDescription>
        <CardContent>
          <Button className="h-[2.5rem] text-[1.2rem] bg-dark-blue">
            <div onClick={onFormClick} className="flex items-center justify-center h-full w-full">
              Formulario
            </div>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardDescription className="p-2">Escanear un producto</CardDescription>
        <CardContent>
          <Button
            onClick={handleShowScanner} // Al hacer clic, muestra el componente QrReader
            className="h-[2.5rem] text-[1.2rem] bg-dark-blue"
          >
            <div className="flex items-center justify-center h-full w-full">
              Escaner
            </div>
          </Button>

          {/* Solo renderiza el componente QrReader si se hizo clic en el botón */}
          {showScanner && <QrReader />}
        </CardContent>
      </Card>
    </div>
  );
}

export default BodyHome;