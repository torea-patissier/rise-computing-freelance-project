import React from 'react';
import Image from "../../elements/Image";

const PrincipauxSecteurs = () => {
  return (
     <div className="principauxSecteursParent pt-32">
       <div className="h2Title">
         <h2 className="mt-0 mt-32 mb-16 is-revealed">
           Nos principaux secteurs<span className="textwhite ml-16">d'Activités</span>
         </h2>
       </div>
       <div className="my-component container">
         <div className="circle-row" data-title="Titre 1" data-description="Description 1">
           <div className="contentSecteurs">
             <Image
                className="circle"
                src={require('../../../assets/images/finance.svg')}
                alt="ModeInterventions"
             />
             <h2 className="title">Finance</h2>
           </div>
         </div>
         <div className="circle-row" data-title="Titre 2" data-description="Description 2">
           <div className="contentSecteurs">
             <Image
                className="circle"
                src={require('../../../assets/images/assurance.svg')}
                alt="ModeInterventions"
             />
             <h2 className="title">Assurance</h2>
           </div>
         </div>
         <div className="circle-row" data-title="Titre 3" data-description="Description 3">
           <div className="contentSecteurs">
             <Image
                className="circle"
                src={require('../../../assets/images/industrie.svg')}
                alt="ModeInterventions"
             />
             <h2 className="title">Industrie</h2>
           </div>
         </div>
         <div className="circle-row" data-title="Titre 3" data-description="Description 3">
           <div className="contentSecteurs">
             <Image
                className="circle"
                src={require('../../../assets/images/service.svg')}
                alt="ModeInterventions"
             />
             <h2 className="title">Service</h2>
           </div>
         </div>
       </div>
     </div>
  );
};

export default PrincipauxSecteurs;
