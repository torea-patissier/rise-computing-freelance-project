import React from 'react';

const RecruitSection = () => {

  return (
     <>
       <div className="container-sm">

         <div className='recruit-section '>
           <h2>
             Nous <span className="text-color-primaryy">rejoindre</span>
           </h2>
           <div className="recruit-parent-paragraph">
             <div className="recruit-paragraph container-sm">
               <p className="text-xs mb-32 text-justify">
                 Au sein de Rise Consulting, nous mettons l’humain au cœur de nos préoccupation.
                 Pour nous, chaque projet est avant tout une aventure Humaine. Nous mettons en place un environnement
                 professionnel ou il fait bon travailler et où l’on peut s’épanouir.<br/><br/>
                 Nous prenons soin de nos collaborateurs car nous sommes convaincus que c’est eux qui font la réussite
                 de
                 notre entreprise.
                 Nous souhaitons cultiver le FUN, car la vie ce n’est pas que le travail, nous organisons régulièrement
                 des événements qui rassemble les salariés ( afterwork, séminaires, etc), afin de renforcer la cohésion
                 global au sein de notre structure.<br/><br/>
                 Des projets Challengeant!
                 Nos consultants souhaitent relever des missions à forte valeurs ajouté, ainsi nous leurs proposons des
                 projets remarquables, motivant et qui les poussent à se surpasser.<br/><br/>
                 Nous rejoindre c’est intégrer une entreprise dont le niveau d’exigence est élevé dans un cadre
                 stimulant
                 ou excellence rime avec épanouissement.
                 Si vous êtes persuadé que l’humain est la première valeur de l’IT, vous êtes faite pour devenir un
                 collaborateur au sein de Rise Consulting !
                 Contactez-nous pour rencontrer nos équipes et en s’avoir davantage !
               </p>
             </div>
           </div>
           <div className="mt-32">
             <button className="button button-primary button-wide-mobile button-sm" onClick={() => {
               window.location.href = "mailto:contact@rise-consulting.fr?subject=Recrutement Raise Consulting"
             }}>Je rejoins l'équipe !
             </button>
           </div>
         </div>
       </div>
     </>
  );
}

export default RecruitSection;
