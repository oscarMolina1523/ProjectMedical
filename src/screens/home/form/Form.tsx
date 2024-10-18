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
import React from "react";

interface FormPageProps{
  onFormClick: () => void;
}

const FormPage: React.FC<FormPageProps> = ({onFormClick}) => {
  return (
    <div className="p-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-dark-blue text-[1.5rem] font-bold text-extra-bold">Formulario</CardTitle>
          <CardDescription className="text-justify">Inserte datos unicamente validados por un profesional de la salud</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div>
            <p className="text-left">¿Tiene alguna alergia conocida?</p>
            <Input className="h-[3rem]" type="text" placeholder="escribir..." />
          </div>
          <div>
            <p className="text-left">¿A que es alergico?</p>
            <Input className="h-[3rem]" type="text" placeholder="escribir..." />
          </div>
          <div>
            <p className="text-left">¿Cual es la gravedad de su alergia?</p>
            <Input className="h-[3rem]" type="text" placeholder="escribir..." />
          </div>
          <div>
            <p className="text-left">¿Cual es su reaccion cuando entra en contacto con el alèrgeno?</p>
            <Input className="h-[3rem]" type="text" placeholder="escribir..." />
          </div>
          <div>
            <p className="text-left">¿Ha tenido alguna reacción alérgica grave en el pasado?</p>
            <Input className="h-[3rem]" type="text" placeholder="escribir..." />
          </div>
          <div>
            <p className="text-left">¿Está tomando algún medicamento para controlar sus alergias?</p>
            <Input className="h-[3rem]" type="text" placeholder="escribir..." />
          </div>
          <div>
            <p className="text-left">¿Ha consultado a un médico o alergólogo sobre sus alergias?</p>
            <Input className="h-[3rem]" type="text" placeholder="escribir..." />
          </div>
          <div>
            <p className="text-left">¿Tiene un plan de emergencia en caso de una reacción alérgica grave?</p>
            <Input className="h-[3rem]" type="text" placeholder="escribir..." />
          </div>
        </CardContent>
        <CardFooter className="flex flex-row gap-4">
          <Button className="h-[3rem] text-[1.5rem]">
            <div onClick={onFormClick} className="flex items-center justify-center h-full w-full">
              Cancelar
            </div>
          </Button>
          <Button className="h-[3rem] text-[1.5rem]">
            <div onClick={onFormClick} className="flex items-center justify-center h-full w-full">
              Enviar
            </div>
          </Button>
        </CardFooter>
      </Card>

    </div>
  );
}

export default FormPage;