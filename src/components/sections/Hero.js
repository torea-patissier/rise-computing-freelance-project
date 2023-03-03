import React from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../utils/SectionProps';
import Logo from "../layout/partials/Logo";
import Particule from "../elements/Particule";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
                className,
                topOuterDivider,
                bottomOuterDivider,
                topDivider,
                bottomDivider,
                hasBgColor,
                invertColor,
                ...props
              }) => {

  const outerClasses = classNames(
     'hero section is-revealed center-content',
     topOuterDivider && 'has-top-divider',
     bottomOuterDivider && 'has-bottom-divider',
     hasBgColor && 'has-bg-color',
     invertColor && 'invert-color',
     className
  );

  const innerClasses = classNames(
     'hero-inner is-revealed section-inner',
     topDivider && 'has-top-divider',
     bottomDivider && 'has-bottom-divider'
  );

  return (
     <section
        {...props}
        className={outerClasses}
     >
       <div>
         <div
            className={innerClasses}
         >
           <div className="tsparticles mt-32">
             <Particule/>
           </div>
           <div className="hero-full-screen is-revealed reveal-from-bottom">
             <Logo/>
             <div className="hero-title-logo is-revealed reveal-from-top">
               <h2 className="mt-0 mt-32 is-revealed">
                 Conseil, pilotage et <span className="text-color-primaryy">Développement IT</span>
               </h2>
             </div>
             <div className="sous-titre-hero ">
               <p className="m-0 mb-32 container-sm">
                 Rise Consulting accélère la transformation digitale de ses clients en les accompagnant dans le
                 déploiement de projet IT complexes.
               </p>
             </div>
           </div>
         </div>
       </div>
     </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
