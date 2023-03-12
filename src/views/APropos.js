import React from 'react';
import AProposRise from "../components/sections/APropos/AProposRise";
import NotreVisionDuConseil from "../components/sections/APropos/NotreVisionDuConseil";
import NotreApproche from "../components/sections/APropos/NotreApproche";
import ModeInterventions from "../components/sections/APropos/ModeInterventions";
import PrincipauxSecteurs from "../components/sections/APropos/PrincipauxSecteurs";
import Footer from "../components/layout/Footer";
import HeaderAPropos from "../components/layout/HeaderAPropos";

//Check CSS themes/section.scss
const APropos = () => {

  return (
     <div className="aProposComponent">
       <HeaderAPropos className="headerApropos"/>
       <AProposRise/>
       <NotreVisionDuConseil/>
       <NotreApproche/>
       <ModeInterventions/>
       <PrincipauxSecteurs/>
       <Footer/>
     </div>
  );
}

export default APropos;
