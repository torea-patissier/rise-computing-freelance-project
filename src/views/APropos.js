import React from 'react';
import AProposRise from "../components/sections/APropos/AProposRise";
import NotreVisionDuConseil from "../components/sections/APropos/NotreVisionDuConseil";
import NotreApproche from "../components/sections/APropos/NotreApproche";
import ModeInterventions from "../components/sections/APropos/ModeInterventions";
import PrincipauxSecteurs from "../components/sections/APropos/PrincipauxSecteurs";

//Check CSS themes/section.scss
const APropos = () => {

  return (
     <div className="aProposComponent">
       <AProposRise/>
       <NotreVisionDuConseil/>
       <NotreApproche/>
       <ModeInterventions/>
       <PrincipauxSecteurs/>
     </div>
  );
}

export default APropos;
