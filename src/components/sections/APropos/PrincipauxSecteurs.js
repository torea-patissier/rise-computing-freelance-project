import React from 'react';

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
             <div className="circle"></div>
             <h2 className="title">Banque</h2>
             {/*<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sagittis quam.*/}
             {/*  Donec vitae dictum libero. Suspendisse potenti. Proin sed massa magna. In a rhoncus urna, quis aliquam*/}
             {/*  eros.</p>*/}
           </div>
         </div>
         <div className="circle-row" data-title="Titre 2" data-description="Description 2">
           <div className="contentSecteurs">
             <div className="circle"></div>
             <h2 className="title">Assurance</h2>
             {/*<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sagittis quam.*/}
             {/*  Donec vitae dictum libero. Suspendisse potenti. Proin sed massa magna. In a rhoncus urna, quis aliquam*/}
             {/*  eros.</p>*/}
           </div>
         </div>
         <div className="circle-row" data-title="Titre 3" data-description="Description 3">
           <div className="contentSecteurs">
             <div className="circle"></div>
             <h2 className="title">Industrie</h2>
             {/*<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sagittis quam.*/}
             {/*  Donec vitae dictum libero. Suspendisse potenti. Proin sed massa magna. In a rhoncus urna, quis aliquam*/}
             {/*  eros.</p>*/}
           </div>
         </div>
         <div className="circle-row" data-title="Titre 3" data-description="Description 3">
           <div className="contentSecteurs">
             <div className="circle"></div>
             <h2 className="title">Service</h2>
             {/*<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sagittis quam.*/}
             {/*  Donec vitae dictum libero. Suspendisse potenti. Proin sed massa magna. In a rhoncus urna, quis aliquam*/}
             {/*  eros.</p>*/}
           </div>
         </div>
       </div>
     </div>
  );
};

export default PrincipauxSecteurs;