import React from 'react';
import classNames from 'classnames';
import {SectionTilesProps} from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
                         className,
                         topOuterDivider,
                         bottomOuterDivider,
                         topDivider,
                         bottomDivider,
                         hasBgColor,
                         invertColor,
                         pushLeft,
                         ...props
                       }) => {

  const outerClasses = classNames(
     'features-tiles section',
     topOuterDivider && 'has-top-divider',
     bottomOuterDivider && 'has-bottom-divider',
     hasBgColor && 'has-bg-color',
     invertColor && 'invert-color',
     className
  );

  const innerClasses = classNames(
     'features-tiles-inner section-inner pt-0',
     topDivider && 'has-top-divider',
     bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
     'tiles-wrap pt-32 center-content',
     pushLeft && 'push-left'
  );

  return (
     <section
        {...props}
        className={outerClasses}
     >
       <div className="">
         <div className={innerClasses}>
           <div className={tilesClasses}>

             <div className="tiles-item reveal-from-bottom" data-reveal-delay="50">
               <div className="tiles-item-inner">
                 <div className="features-tiles-item-header">
                   <div className="features-tiles-item-image mb-16">
                     <Image
                        src={require('./../../assets/images/smile.svg')}
                        alt="qsn"
                        width={70}
                        height={70}/>
                   </div>
                 </div>
                 <div className="features-tiles-item-content">
                   <h4 className="mt-0 text-color-primary mb-8">
                     Qui Sommes-Nous?
                   </h4>
                   <p className="m-0 text-sm text-justify">
                     Rise Consulting, est un cabinet de consulting à taille humaine dont notre principal objectif
                     d’assurer la satisfaction de nos consultants autant que celle de nos clients.
                   </p>
                 </div>
               </div>
             </div>

             <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
               <div className="tiles-item-inner">
                 <div className="features-tiles-item-header">
                   <div className="features-tiles-item-image mb-16">
                     <Image
                        src={require('./../../assets/images/notre-recette.svg')}
                        alt="Features tile icon 06"
                        width={64}
                        height={64}/>
                   </div>
                 </div>
                 <div className="features-tiles-item-content">
                   <h4 className="mt-0  text-color-primary mb-8">
                     Notre recette?
                   </h4>
                   <p className="m-0 text-sm text-justify">
                     Nous sélectionnons avec attentions les projets que nous réalisons avec nos clients, de sorte que
                     chacun de nos collaborateurs se sente stimulé et progresse rapidement, ainsi nous associons les
                     meilleurs talents à l’élaboration de transformations créatrice de valeur.
                   </p>
                 </div>
               </div>
             </div>

           </div>
         </div>
       </div>
     </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
