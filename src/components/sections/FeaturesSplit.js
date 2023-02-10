import React from 'react';
import classNames from 'classnames';
import {SectionSplitProps} from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
                         className,
                         topOuterDivider,
                         bottomOuterDivider,
                         topDivider,
                         bottomDivider,
                         hasBgColor,
                         invertColor,
                         invertMobile,
                         invertDesktop,
                         alignTop,
                         imageFill,
                         ...props
                       }) => {

  const outerClasses = classNames(
     'features-split section',
     topOuterDivider && 'has-top-divider',
     bottomOuterDivider && 'has-bottom-divider',
     hasBgColor && 'has-bg-color',
     invertColor && 'invert-color',
     className
  );

  const innerClasses = classNames(
     'features-split-inner section-inner',
     topDivider && 'has-top-divider',
     bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
     'split-wrap mt-32',
     invertMobile && 'invert-mobile',
     invertDesktop && 'invert-desktop',
     alignTop && 'align-top'
  );


  return (
     <section
        {...props}
        className={outerClasses}
     >
       <div className="container">
         <div id='nos_domaines_dexpertises' className={innerClasses} data-reveal-delay="100">
           <h2 className="mt-0 mb-16 container-sm reveal-from-bottom center-content" data-reveal-delay="200">
             Nos domaines <span className="text-color-primaryy">d'expertises</span>
           </h2>
           <div className={splitClasses}>

             <div className="split-item">
               <div className="split-item-content center-content-mobile reveal-from-left"
                    data-reveal-container=".split-item">
                 <h3 className="mt-0 mb-12">
                   Conseil & Pilotage
                 </h3>
                 <p className="m-0 text-justify">
                   Nos compétences Métier et Techniques nous permettent de couvrir l’ensemble de vos projets de bout en
                   bout. Depuis la veille et études d’opportunités, le cadrage, la mise en œuvre du projet jusqu’à la
                   conduite du changement.
                 </p>
               </div>
               <div className={
                 classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                 )}
                    data-reveal-container=".split-item">
                 <Image
                    src={require('../../assets/images/imageR1.svg')}
                    alt="Features split 01"
                    width={528}
                    height={396}/>
               </div>
             </div>

             <div className="split-item">
               <div className="split-item-content center-content-mobile reveal-from-right"
                    data-reveal-container=".split-item">
                 <h3 className="mt-0 mb-12">
                   Software
                 </h3>
                 <p className="m-0 text-justify">
                   Nos équipes de talents utilisent un pool de technos pour répondre au plus près de vos besoins
                   applicatifs.
                 </p>
               </div>
               <div className={
                 classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                 )}
                    data-reveal-container=".split-item">
                 <Image
                    src={require('../../assets/images/software.svg')}
                    alt="software"
                    width={528}
                    height={396}/>
               </div>
             </div>

             <div className="split-item">
               <div className="split-item-content center-content-mobile reveal-from-left"
                    data-reveal-container=".split-item">
                 <h3 className="mt-0 mb-12">
                   Data
                 </h3>
                 <p className="text-justify m-0">
                   Nous accompagnons nos clients dans l’ensemble de leur projet de Data Management, du cadrage et de
                   l’analyse, en passant par la mise en place, jusqu’à l’accompagnement du métier.<br/>
                   Nous aidons nos clients à identifier les données utiles et de qualité mais également à faire le bon
                   choix d’architecture des plateformes data pour générer de la valeur.
                 </p>
               </div>
               <div className={
                 classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                 )}
                    data-reveal-container=".split-item">
                 <Image
                    src={require('../../assets/images/data.svg')}
                    alt="Features split 01"
                    width={528}
                    height={396}/>
               </div>
             </div>

             <div className="split-item">
               <div className="split-item-content center-content-mobile reveal-from-right"
                    data-reveal-container=".split-item">
                 <h3 className="mt-0 mb-12">
                   DevOps
                 </h3>
                 <p className="m-0 text-justify">
                   Nous accompagnons nos clients dans la mise en place des pratiques DevOps afin d’automatiser toutes
                   les phases de développement, intégration continue, livraison continue, déploiement continue, etc.
                 </p>
               </div>
               <div className={
                 classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                 )}
                    data-reveal-container=".split-item">
                 <Image
                    src={require('../../assets/images/devops.svg')}
                    alt="devops"
                    width={528}
                    height={396}/>
               </div>
             </div>

             <div className="split-item">
               <div className="split-item-content center-content-mobile reveal-from-left"
                    data-reveal-container=".split-item">
                 <h3 className="mt-0 mb-12">
                   Cloud
                 </h3>
                 <p className=" text-justify m-0">
                   Nos experts vous accompagnent, afin de réaliser le meilleur choix d’architecture des plateformes
                   Cloud (Publics, Privés ou Hybrides) à mettre en place en fonctions de vos besoins.
                 </p>
               </div>
               <div className={
                 classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                 )}
                    data-reveal-container=".split-item">
                 <Image
                    src={require('../../assets/images/cloud.svg')}
                    alt="cloud"
                    width={528}
                    height={396}/>
               </div>
             </div>

             <div className="split-item">
               <div className="split-item-content center-content-mobile reveal-from-right"
                    data-reveal-container=".split-item">
                 <h3 className="mt-0 mb-12">
                   Cybersécurité
                 </h3>
                 <p className="m-0">
                   La cybersécurité en entreprise ne s’improvise pas, nous accompagnons nos clients dans
                   l’identifications des failles de sécurités jusqu’à la mise en place d’une stratégie efficace.
                 </p>
               </div>
               <div className={
                 classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    // imageFill && 'split-item-image-fill'
                 )}
                    data-reveal-container=".split-item">
                 <Image
                    src={require('../../assets/images/cybersecu.svg')}
                    alt="cyber-security"
                    width={100}
                    height={100}/>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
