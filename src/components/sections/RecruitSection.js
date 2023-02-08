import React, {useRef, useState} from 'react';
import emailjs from "@emailjs/browser";
import HorizontalScroll from "./HorizontalScroll";

export const ContactUsFile = () => {
  const form = useRef();
  const fileInput = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
    file: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      file: event.target.files[0]
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormData({user_name: '', user_email: '', user_phone: '', message: '', file: ''});

    emailjs.sendForm('service_inh07sr', 'template_ai3sezr', form.current, 'Ox4sJt0SwMGEV-t2o')
       .then((result) => {
         console.log(result.text);
       }, (error) => {
         console.log(error.text);
       });
  };

  return (
     <div className="form-child">
       <h3 className='text-black'>Nous rejoindre</h3>
       <form className='form-recruit' ref={form} onSubmit={sendEmail}>
         <input className='input-recruit text-xs' name="user_name" placeholder='Nom' value={formData.user_name} onChange={handleChange}/>
         <input className='input-recruit text-xs' name="user_email" placeholder='Email' value={formData.user_email} onChange={handleChange}/>
         <input className='input-recruit text-xs' name="user_phone" placeholder='Téléphone' value={formData.user_phone} onChange={handleChange}/>
         <textarea className='message-recruit text-xs' name='message' placeholder="Message" value={formData.message} onChange={handleChange}/>
         <input className="mt-8" type="file" ref={fileInput} onChange={handleFileChange}/>
         <button className="button button-primary mt-8 button-wide-mobile button-sm">Envoyer</button>
       </form>
     </div>
  );
};

const RecruitSection = () => {

  return (
     <>
       <div className="container-sm">
         <div className='recruit-section '>
           <h2>
             Nous <span className="text-color-primaryy">rejoindre</span>
           </h2>
           <div className="recruit-paragraph">
             <p className="text-sm mb-32">
               Au sein de Rise Consulting, nous mettons l’humain au cœur de nos préoccupation.
               Pour nous, chaque projet est avant tout une aventure Humaine. Nous mettons en place un environnement
               professionnel ou il fait bon travailler et où l’on peut s’épanouir.<br/><br/>
               Nous prenons soin de nos collaborateurs car nous sommes convaincus que c’est eux qui font la réussite de
               notre entreprise.
               Nous souhaitons cultiver le FUN, car la vie ce n’est pas que le travail, nous organisons régulièrement
               des événements qui rassemble les salariés ( afterwork, séminaires, etc), afin de renforcer la cohésion
               global au sein de notre structure.<br/><br/>
               Des projets Challengeant !!!
               Nos consultants souhaitent relever des missions à forte valeurs ajouté, ainsi nous leurs proposons des
               projets remarquables, motivant et qui les poussent à se surpasser.<br/><br/>
               Nous rejoindre c’est intégrer une entreprise dont le niveau d’exigence est élevé dans un cadre stimulant
               ou excellence rime avec épanouissement.
               Si vous êtes persuadé que l’humain est la première valeur de l’IT, vous êtes faite pour devenir un
               collaborateur au sein de Rise Consulting !
               Contactez-nous pour rencontrer nos équipes et en s’avoir davantage !
             </p>
           </div>
           <div className="form-parent mt-32">
             <ContactUsFile/>
           </div>
         </div>
       </div>
     </>
  );
}

export default RecruitSection;
