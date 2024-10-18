import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex h-1/2 items-center justify-center w-full p-2">
        <img className="object-contain max-w-full max-h-full" src="src\assets\logo2.jpg" alt="this is the logo" />
      </div>
      <div className="flex flex-col h-1/2 items-center justify-center gap-8">
        <div className=" flex flex-col gap-2">
          <span className="text-dark-blue text-[2.5rem] font-bold text-extra-bold">Cuidamos tu salud</span>
          <span>"La salud de tu piel refleja tu bienestar interior."</span>
        </div>
        <div className="flex flex-col gap-2 w-full p-2">
          <Link to="/login">
            <Button className="w-full h-[3rem] bg-dark-blue text-[1.5rem]">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="w-full h-[3rem] border text-[1.5rem] bg-surface-neutral text-dark-blue hover:bg-dark-blue hover:text-surface-neutral">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;