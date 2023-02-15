import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SectionProps} from '../../utils/SectionProps';
import Image from "../elements/Image";
import emailjs from '@emailjs/browser';
import {ToastContainer, toast} from "react-toastify";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

export const ContactUs = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormData({user_name: '', user_email: '', user_phone: '', message: ''});
    if (formData.user_name === "" || formData.user_email === "" || formData.user_phone === "" || formData.message === "") {
      toast.error('Veuillez remplir le formulaire', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    emailjs.sendForm('service_nsnoll6', 'template_bcpnimj', form.current, '3iYRjdFoyO--ogRix')
       .then((result) => {
         console.log(result.text);
         toast.success('Votre e-mail à bien été envoyé !', {
           position: "bottom-right",
           autoClose: 1500,
           hideProgressBar: false,
           closeOnClick: false,
           pauseOnHover: false,
           draggable: false,
           progress: undefined,
           theme: "light",
         });
       }, (error) => {
         console.log(error.text);
         toast.error('Oups, il y\'a un problème!', {
           position: "bottom-right",
           autoClose: 1500,
           hideProgressBar: false,
           closeOnClick: false,
           pauseOnHover: false,
           draggable: false,
           progress: undefined,
           theme: "light",
         });
       });
  };

  return (
     <div className="form-child">
       <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="light"
       />
       <h3 id="nous_contacter" className='text-black'>Nous contacter</h3>
       <form className='form-recruit' ref={form} onSubmit={sendEmail}>
         <input className='input-recruit text-xs' name="user_name" placeholder='Nom' value={formData.user_name}
                onChange={handleChange}/>
         <input className='input-recruit text-xs' name="user_email" placeholder='Email' value={formData.user_email}
                onChange={handleChange}/>
         <input className='input-recruit text-xs' name="user_phone" placeholder='Téléphone'
                value={formData.user_phone} onChange={handleChange}/>
         <textarea className='message-recruit text-xs' name='message' placeholder="Message" value={formData.message}
                   onChange={handleChange}/>
         <button className="button button-primary mt-8 button-wide-mobile button-sm">Envoyer</button>
       </form>
     </div>
  );
};

const Cta = ({
               className,
               topOuterDivider,
               bottomOuterDivider,
               topDivider,
               bottomDivider,
               hasBgColor,
               invertColor,
               split,
               ...props
             }) => {

  const outerClasses = classNames(
     'cta section center-content-mobile',
     topOuterDivider && 'has-top-divider',
     bottomOuterDivider && 'has-bottom-divider',
     hasBgColor && 'has-bg-color',
     invertColor && 'invert-color',
     className
  );

  const innerClasses = classNames(
     'cta-inner section-inner',
     topDivider && 'has-top-divider',
     bottomDivider && 'has-bottom-divider',
     split && 'cta-split'
  );

  return (
     <section
        {...props}
        className={outerClasses}
     >

       <div
          className={innerClasses}
       >
         <div className="cta-slogan">
           {/*<div className="logo-contact">*/}
           {/*  <svg width="32" height="32" viewBox="0 0 94 93" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
           {/*    <path*/}
           {/*       d="M19.6095 2.59333C18.7619 1.74573 17.3649 1.82557 16.6446 2.78369C10.3494 11.1572 2 24.9078 2 38.6766C2 50.7967 9.62914 58.4429 17.5136 66.3451C18.7745 67.6088 20.042 68.8792 21.2858 70.1753C22.2106 71.1391 23.1274 72.112 24.0427 73.0833C32.5515 82.1132 40.9255 91 54.3234 91C68.4141 91 81.204 85.4301 90.6113 76.3719C91.3966 75.6157 91.3825 74.3663 90.6116 73.5954L71.7192 54.7031C70.9382 53.922 69.6718 53.922 68.8908 54.7031L57.3246 66.2693C56.5435 67.0504 55.2772 67.0504 54.4961 66.2693L29.5759 41.3491C28.7948 40.568 28.7948 39.3017 29.5759 38.5206L41.1421 26.9544C41.9232 26.1734 41.9232 24.907 41.1421 24.126L19.6095 2.59333Z"*/}
           {/*       stroke="#F4F4F4" stroke-width="4" stroke-linejoin="round"/>*/}
           {/*  </svg>*/}
           {/*  <h5 className="nous-contacter ml-16">06 36 39 00 54</h5>*/}
           {/*</div>*/}
           <div className="logo-contact">
             <svg width="32" height="32" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M45 11.25C30.5025 11.25 18.75 22.6849 18.75 36.7905C18.75 48.9054 38.1133 71.1616 43.579 77.2025C44.3513 78.0561 45.6487 78.0561 46.421 77.2025C51.8867 71.1616 71.25 48.9054 71.25 36.7905C71.25 22.6849 59.4975 11.25 45 11.25Z"
                  stroke="#F4F4F4" stroke-width="2"/>
               <ellipse cx="45" cy="36.7904" rx="11.25" ry="10.9459" stroke="#F4F4F4" stroke-width="2"/>
             </svg>
             <h5 className="nous-contacter ml-16">2 Rue Chaintron, 92 120 Montrouge</h5>
           </div>
           <Image
              src={require('./../../assets/images/map.png')}
              alt="Features tile icon 05"
              width={500}
              height={500}/>
         </div>
         <div>
           <ContactUs/>
         </div>
       </div>
     </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
