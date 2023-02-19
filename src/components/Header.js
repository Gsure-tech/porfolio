import React from "react";

//images

import gsure from "../assets/gsure.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
        
          {/* logo */}
          <a href="#">
            <img className="gsureLogo" src={gsure} alt="" />
          </a>
          <button className="btn btn-sm"> Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
