import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Mail, Twitter } from 'lucide-react';
import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col h-1/4 items-center justify-center">
        <div className="text-dark-blue text-[2.5rem] font-bold text-extra-bold">Register here</div>
        <div className="text-dark-blue text-[1.1rem] font-bold">Crea una cuenta y disfruta!</div>
      </div>
      <div className="flex flex-col h-2/3 p-6 gap-4">
        <Input className="h-[3rem]" type="text" placeholder="Email" />
        <Input className="h-[3rem]" type="text" placeholder="Password" />
        <Input className="h-[3rem]" type="text" placeholder="Confirm Password" />
        <div className="w-full text-end">
          <span className="text-dark-red mr-2">Forgot your password?</span>
        </div>
        <Button className="h-[3rem] text-[1.5rem]">
          <Link to="/home" className="flex items-center justify-center h-full w-full">
            Sign Up
          </Link>
        </Button>
        <Link to="/login" className="w-full text-center">
          <span className="text-dark-blue mr-2 font-bold">Already have an account</span>
        </Link>
      </div>
      <div className="h-1/3 gap-4 flex flex-col">
        <div className="w-full text-center">
          <span className="text-dark-red mr-2 font-bold">Or continue with</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Button variant="outline" className="opacity-75 hover:opacity-100" size="icon">
            <Twitter className="h-6 w-6" />
          </Button>
          <Button variant="outline" className="opacity-75 hover:opacity-100" size="icon">
            <Github className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="opacity-75 hover:opacity-100" size="icon">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;