import React from 'react';
import Image from '../../elements/Image';

const ModeInterventions = () => {

  return (
     <div id="modes_intervention" className="modeInterventioParent pb-32">
       <div className="container">
         <div className="mt-32">
           <h2 className="h2Title">
             Nos modes<span className="text-color-primaryy ml-16">d'Intervention</span>
           </h2>
         </div>
         <div className="nosModesDinterventions">
             <Image
                className="right"
                src={require('../../../assets/images/collab.svg')}
                alt="ModeInterventions"
             />
           <div className="hLeft">
             <h5 className="titleNotreVision">Régie :</h5>
             <p className="text-sm text-justify m-16">Assistance technique unitaire ou groupée. Mise à disposition d'un
               ou plusieurs collaborateurs possédant l'expertise nécessaire.</p>
           </div>
           <div className="cLeft">
             <h5 className="titleNotreVision">Création de centre de service :</h5>
             <p className="text-sm text-justify m-16"> Maintenir et faire évoluer une solution métier pour
               l'entreprise.</p>
           </div>
           <div className="bLeft">
             <h5 className="titleNotreVision">Forfait :</h5>
             <p className="text-sm text-justify m-16">Une équipe dédiée et engagée pour vous accompagner de manière
               personnalisée.</p>
           </div>
         </div>
       </div>
     </div>
  );
};

export default ModeInterventions;
