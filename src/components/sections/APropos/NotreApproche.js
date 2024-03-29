import React, { useEffect, useRef } from 'react';
import Image from "../../elements/Image";

const NotreApproche = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    });

    elementsRef.current.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
     <div id="notre_approche" className="notreApprocheParent pt-16 pb-32">
       <div className="container">
         <div className="h2Title pb-32 mt-24">
           <h2 className="mt-0 mt-32 is-revealed h2APropos">
             Notre<span className="textwhite ml-16">Approche</span>
           </h2>
         </div>
         <div className="notreApproche">
           <Image
              className="left"
              src={require('../../../assets/images/intervention.svg')}
              alt="ModeInterventions"
           />
           <div className="hRight" ref={el => elementsRef.current[0] = el}>
             <h5 className="titleNotreVision">Rise Consulting à votre écoute :</h5>
             <p className="text-sm text-justify m-16">Entretiens avec les acteurs clés, prise de connaissance de votre
               environnement, de vos spécificités et de vos enjeux.</p>
           </div>
           <div className="cRight" ref={el => elementsRef.current[1] = el}>
             <h5 className="titleNotreVision">Elaboration du besoin :</h5>
             <p className="text-sm text-justify m-16">Chiffrage et cadrage du projet, mise à disposition de nos talents
               afin de créer durablement la valeur nécessaire à votre réussite, ainsi que l’identification des objectifs
               clés.</p>
           </div>
           <div className="bRight" ref={el => elementsRef.current[2] = el}>
             <h5 className="titleNotreVision">Réalisation de votre projet :</h5>
             <p className="text-sm text-justify m-16">Mise en place et déploiement d’une solution personnalisée et
               adaptée à votre environnement, en assistance technique ou projet à engagement.</p>
           </div>
         </div>
       </div>
     </div>
  );
};

export default NotreApproche;
