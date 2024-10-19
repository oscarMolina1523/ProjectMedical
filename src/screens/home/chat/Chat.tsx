import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from 'lucide-react';
import React from "react";
import { Link } from "react-router-dom";


const ChatPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Link to="/home"
        className='flex flex-row w-full h-[4rem] items-center justify-start border text-left gap-6'>
        <ChevronLeft className="h-6 w-6 text-black mr-2" />
        <span className='div'>
          Chat
        </span>
      </Link>
      <div className='p-2 h-full flex flex-col'>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Consultas</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row items-center gap-2 mb-[22rem]">
            <img className='object-contain w-1/6 h-1/6' src="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg" alt="profile icon" />
            <div className="bg-light-blue rounded-full p-2">
              <span>Hola como puedo ayudarte?</span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row gap-2">
            <Input className="h-[3rem]" type="text" placeholder="text" />
            <Button className="h-[3rem] text-[1.2rem]">
              <div className="flex items-center justify-center h-full w-full">
                Send
              </div>
            </Button>
          </CardFooter>
        </Card>

      </div>

    </div>
  );
}

export default ChatPage;