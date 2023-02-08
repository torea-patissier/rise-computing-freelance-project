import React from 'react';
import classNames from 'classnames';
import {SectionTilesProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import HorizontalScroll from "./HorizontalScroll";

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
     'testimonial section',
     topOuterDivider && 'has-top-divider',
     bottomOuterDivider && 'has-bottom-divider',
     hasBgColor && 'has-bg-color',
     invertColor && 'invert-color',
     className
  );

  const innerClasses = classNames(
     'testimonial-inner section-inner',
     topDivider && 'has-top-divider',
     bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
     'tiles-wrap mt-32',
     pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  return (
     <>
       <section
          {...props}
          className={outerClasses}
       >
         <div className="container">
           <div className={innerClasses}>
             {/*<SectionHeader data={sectionHeader} className="center-content" />*/}
             <h2 id="nos_parternaires" className=" mb-16 container-sm reveal-from-bottom center-content"
                 data-reveal-delay="200">
               Ils nous font <span className="text-color-primaryy">confiance</span>
             </h2>
           </div>
         </div>
       </section>
           <div className="testimonial-scroll">
             <HorizontalScroll/>
           </div>
     </>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
