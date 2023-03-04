import React from 'react';
import AProposRise from "../components/sections/APropos/AProposRise";
import NotreVisionDuConseil from "../components/sections/APropos/NotreVisionDuConseil";

//Check CSS themes/section.scss
const APropos = () => {

  return (
     <div className="aProposComponent">
       <AProposRise/>
       <NotreVisionDuConseil/>
     </div>
  );
}

export default APropos;
