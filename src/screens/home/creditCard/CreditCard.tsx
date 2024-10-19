import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from 'lucide-react';
import React from "react";
import { Link } from "react-router-dom";


const CreditCardPage: React.FC = () => {
  return (
    <div className="div">
      <Link to="/pay"
        className='flex flex-row w-full h-[4rem] items-center justify-start border text-left gap-6'>
        <ChevronLeft className="h-6 w-6 text-black mr-2" />
        <span className='div'>
          Tarjeta Credito
        </span>
      </Link>
      <div className="p-2">
        <Card className="div">
          <CardHeader className="flex flex-row w-full gap-1">
            <img className="object-contain w-1/4 min-h-full"
              src="https://pbs.twimg.com/profile_images/1417834595899232256/YzltM_gk_400x400.png" alt="this is the first" />
            <img className="object-contain w-1/4 max-h-full"
              src="https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg" alt="this is the first" />
            <img className="object-contain w-1/4 max-h-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrWHebRtvOTxy4VPYjaabCPS6ANzDGowQvuQ&s" alt="this is the first" />
            <img className="object-contain w-1/4 max-h-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwHjLNzBTGeHZl_UxVE14nB2qOzXM7CJfhg&s" alt="this is the first" />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div>
              <p className="text-left">Nombre</p>
              <Input className="h-[3rem]" type="text" placeholder="escribir..." />
            </div>
            <div>
              <p className="text-left">Numero de tarjeta</p>
              <Input className="h-[3rem]" type="text" placeholder="escribir..." />
            </div>
            <div>
              <p className="text-left">Fecha de expiracion</p>
              <Input className="h-[3rem]" type="date" placeholder="escribir..." />
            </div>
            <div>
              <p className="text-left">CVV</p>
              <Input className="h-[3rem]" type="text" placeholder="escribir..." />
            </div>
            <div>
              <p className="text-left">Codigo Postal</p>
              <Input className="h-[3rem]" type="text" placeholder="escribir..." />
            </div>
          </CardContent>
          <CardFooter className="w-full">
            <Button className="h-[3rem] text-[1.5rem] rounded-full w-full bg-dark-blue">
              <div className="flex items-center justify-center h-full w-full">
                Agregar Tarjeta
              </div>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default CreditCardPage;