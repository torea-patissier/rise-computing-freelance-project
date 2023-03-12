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
