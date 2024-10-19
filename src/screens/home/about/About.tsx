import { ChevronLeft } from 'lucide-react';
import React from "react";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  return (
    <div className="div">
      <Link to="/home"
        className='flex flex-row w-full h-[4rem] items-center justify-start border text-left gap-6'>
        <ChevronLeft className="h-6 w-6 text-black mr-2" />
        <span className='div'>
          INNOVAMED
        </span>
      </Link>
      <div className='text-justify p-2 mt-4'>
        INNOVAMED ayuda a personas con alergias 
        cutáneas a identificar productos seguros mediante el 
        escaneo de códigos de barras, proporcionando información confiable 
        y sugerencias de productos hipoalergénicos.
      </div>
      <span className='font-bold text-[1.2rem]'>Integantes</span>
      <div className='text-justify p-2 mt-4'>
        <div className='flex flex-col gap-2'>
          <span>Oscar Danilo Molina</span>
          <span>+505 5720 7708</span>
          <span>oscarmolina20032021@gmail.com</span>
          <div className='h-[1px] bg-dark-blue w-full'></div>
        </div>
        <div className='flex flex-col gap-2'>
          <span>Joshua Benjamin Chavez Lau</span>
          <span>+505 5720 7708</span>
          <span>joshuabenjamin15@gmail.com</span>
          <div className='h-[1px] bg-dark-blue w-full'></div>
        </div>
        <div className='flex flex-col gap-2'>
          <span>Eduardo Jose Hernandez</span>
          <span>+505 5720 7708</span>
          <span>eduardojose35@gmail.com</span>
          <div className='h-[1px] bg-dark-blue w-full'></div>
        </div>
        <div className='flex flex-col gap-2'>
          <span>Santiago Rivera</span>
          <span>+505 5720 7708</span>
          <span>santiagorivera1549@gmail.com</span>
          <div className='h-[1px] bg-dark-blue w-full'></div>
        </div>
        <div className='flex flex-col gap-2'>
          <span>Aisha Mendieta</span>
          <span>+505 5720 7708</span>
          <span>aisharomero8726@gmail.com</span>
          <div className='h-[1px] bg-dark-blue w-full'></div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;