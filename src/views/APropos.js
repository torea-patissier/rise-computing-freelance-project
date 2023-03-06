import React from 'react';
import AProposRise from "../components/sections/APropos/AProposRise";
import NotreVisionDuConseil from "../components/sections/APropos/NotreVisionDuConseil";
import NotreApproche from "../components/sections/APropos/NotreApproche";

//Check CSS themes/section.scss
const APropos = () => {

  return (
     <div className="aProposComponent">
       <AProposRise/>
       <NotreVisionDuConseil/>
       <NotreApproche/>
     </div>
  );
}

export default APropos;
