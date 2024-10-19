import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from 'lucide-react';
import React from "react";
import { Link } from "react-router-dom";

const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <Link to="/home"
        className='flex flex-row w-full h-[4rem] items-center justify-start border text-left gap-6'>
        <ChevronLeft className="h-6 w-6 text-black mr-2" />
        <span className='div'>
          Profile
        </span>
      </Link>
      <div className="w-full">
        <div className="h-1/3 w-full overflow-hidden items-center justify-center flex flex-col">
          <img className='object-contain max-w-full max-h-full' src="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg" alt="profile icon" />
        </div>
        <div className="p-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-dark-blue text-[1.5rem] font-bold text-extra-bold text-left">Datos Personales</CardTitle>
              <CardDescription className="text-left">Desea actualizar sus datos?</CardDescription>
            </CardHeader>
            <CardContent className="gap-4 flex flex-col">
              <div>
                <p className="text-left">Nombre Completo</p>
                <Input className="h-[3rem]" type="text" placeholder="escribir..." />
              </div>
              <div>
                <p className="text-left">Email</p>
                <Input className="h-[3rem]" type="text" placeholder="escribir..." />
              </div>
              <div>
                <p className="text-left">Nombre de Usuario</p>
                <Input className="h-[3rem]" type="text" placeholder="escribir..." />
              </div>
              <div>
                <p className="text-left">Contraseña</p>
                <Input className="h-[3rem]" type="text" placeholder="escribir..." />
              </div>
            </CardContent>
            <CardFooter className="flex flex-row gap-4">
              <Button className="h-[3rem] text-[1.2rem] bg-dark-blue">
                <Link to="/pay" className="flex items-center justify-center h-full w-full">
                  Forma de Pago
                </Link>
              </Button>
              <Button className="h-[3rem] text-[1.2rem] bg-dark-blue">
                <Link to="/login" className="flex items-center justify-center h-full w-full">
                  Cerrar Sesion
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;