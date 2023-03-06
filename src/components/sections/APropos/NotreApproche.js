import React from 'react';
const NotreApproche = () => {

  return (
     <div className="notreApprocheParent pb-32">
       <div className="container">
         <div className="hero-title-logo is-revealed reveal-from-top">
           <h2 className="mt-0 mt-32 is-revealed h2APropos">
             Notre<span className="textwhite ml-16">Approche</span>
           </h2>
         </div>
         <div className="notreApproche">
           <div className="left">
             {/*//Image*/}
           </div>
           <div className="hRight">
             <h5 className="titleNotreVision">Rise Consulting à votre écoute :</h5>
             <p className="text-sm text-justify m-16">Entretiens avec les acteurs clés, prise de connaissance de votre environnement, de vos spécificités et de vos enjeux.</p>
           </div>
           <div className="cRight">
             <h5 className="titleNotreVision">Elaboration du besoin :</h5>
             <p className="text-sm text-justify m-32">Chiffrage et cadrage du projet, mise à disposition de nos talents afin de créer durablement la valeur nécessaire à votre réussite, ainsi que l’identification des objectifs clés.</p>
           </div>
           <div className="bRight">
                <h5 className="titleNotreVision">Réalisation de votre projet :</h5>
             <p className="text-sm text-justify m-32">Mise en place et déploiement d’une solution personnalisée et adaptée à votre environnement, en assistance technique ou projet à engagement.</p>
           </div>
         </div>
       </div>
     </div>
  );
};

export default NotreApproche;
