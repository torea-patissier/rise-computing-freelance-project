import React from 'react';
import AProposRise from "./AProposRise";
import NotreVisionDuConseil from "./NotreVisionDuConseil";
import NotreApproche from "./NotreApproche";
import ModeInterventions from "./ModeInterventions";
import PrincipauxSecteurs from "./PrincipauxSecteurs";
import Footer from "../../layout/Footer";

//Check CSS themes/section.scss
const APropos = () => {

  return (
     <>
       <AProposRise/>
       <NotreVisionDuConseil/>
       <NotreApproche/>
       <ModeInterventions/>
       <PrincipauxSecteurs/>
       <Footer/>
     </>
  );
}

export default APropos;
