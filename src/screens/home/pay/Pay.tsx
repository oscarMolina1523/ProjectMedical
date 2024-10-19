import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ChevronLeft } from 'lucide-react';
import React from "react";
import { Link } from "react-router-dom";


const PayPage: React.FC = () => {
  return (
    <div className="div">
      <Link to="/home"
        className='flex flex-row w-full h-[4rem] items-center justify-start border text-left gap-6'>
        <ChevronLeft className="h-6 w-6 text-black mr-2" />
        <span className='div'>
          Pagos en Linea
        </span>
      </Link>
      <div className='p-2'>
        <Card>
          <CardHeader>
            <CardTitle className="text-dark-blue text-[1.5rem]">Version Premium</CardTitle>
            <CardDescription>$9.99</CardDescription>
            <Button className="bg-brand-primary">Comprar</Button>
          </CardHeader>
          <CardContent className="text-left gap-2">
            <p>Escaneos Ilimitados</p>
            <p>Acceso a Dermatologos</p>
            <p>Acceso a Catalogos de productos organicos</p>
            <p>Acceso a Productos comerciales</p>
            <p>Historial Clinico</p>
            <p>Soporte las 24 horas</p>
            <p>Cupones de descuento</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default PayPage;