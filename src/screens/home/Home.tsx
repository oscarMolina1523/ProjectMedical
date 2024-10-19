import React, { useState } from "react";
import BodyHome from "./body/Body";
import FormPage from "./form/Form";
import HeaderHome from "./header/Header";
import MenuBar from "./menuBar/MenuBar";

const HomeScreen: React.FC = () => {
  const [clickMenu, setClickMenu]=useState<boolean>(false);
  const [clickForm, setClickForm]=useState<boolean>(false);

  const handleMenu=()=>{
    setClickMenu(prevState => !prevState)
  }
  const handleForm=()=>{
    setClickForm(prevState => !prevState)
  }

  return (
    <div className="div">
      <HeaderHome clickMenu={handleMenu}/>
      {clickForm===true ? (<FormPage onFormClick={handleForm}></FormPage>):(<BodyHome onFormClick={handleForm}/>)}
      {clickMenu && <MenuBar onMenuClick={handleMenu}/> }
    </div>
  );
}

export default HomeScreen;