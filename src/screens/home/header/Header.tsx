import { Input } from '@/components/ui/input';
import { Menu, MessageSquare, User } from 'lucide-react';
import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps{
  clickMenu: () => void;
}

const HeaderHome: React.FC<HeaderProps> = ({clickMenu}) => {
  return (
    <div className="flex flex-row h-[5rem] items-center gap-2 shadow justify-around">
      <div className="div">
        <Menu
          className="h-6 w-6 text-black  ml-2" onClick={clickMenu} />
      </div>
      <div className="div">
        <Input className="h-[2rem] rounded-full" type="text" placeholder="search...." />
      </div>
      <Link to="/chat" className="div">
        <MessageSquare className="h-6 w-6 text-black ml-2" />
      </Link>
      <Link to="/profile" className="div">
        <User className="h-6 w-6 text-black ml-2" />
      </Link>
    </div>
  );
}

export default HeaderHome;