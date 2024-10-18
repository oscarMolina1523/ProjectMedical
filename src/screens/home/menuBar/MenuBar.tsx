import { ChevronRight, X } from 'lucide-react';
import React from "react";
import { Link } from "react-router-dom";

interface MenuBarProps{
  onMenuClick: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({onMenuClick}) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 h-full w-[14rem] bg-surface-neutral shadow">
      <div 
        className='flex flex-row w-full h-[4rem] items-center justify-around border'>
        <X className="h-8 w-8" onClick={onMenuClick}/>
        <span className='ml-4'>
          INNOVAMED
        </span>
      </div>
      <div 
        className='flex flex-row w-full h-[4rem] items-center justify-around border text-left'>
        <span className='div'>
          Contactos
        </span>
        <ChevronRight className="h-6 w-6 text-black mr-2" />
      </div>
      <div 
        className='flex flex-row w-full h-[4rem] items-center justify-around border'>
        <span className='ml-4'>
          Acerca de nosotros
        </span>
        <ChevronRight className="h-6 w-6 text-black mr-4" />
      </div>
      <Link to="/login"
        className='flex flex-row w-full h-[4rem] items-center justify-around border text-left'>
        <span className='div'>
          Cerrar Sesion
        </span>
        <ChevronRight className="h-6 w-6 text-black mr-2" />
      </Link>
    </div>
  );
}

export default MenuBar;