import React from 'react';
const RecruitSection = () => {

  return (
     <>
       <div className="container-sm">
         <div className='recruit-section'>
           {/*<button className="button button-primary button-wide-mobile button-sm  mt-32" onClick={handleClick}>Accueil</button>*/}
           <h2 className=" mb-16 " data-reveal-delay="200">
             Nous <span className="text-color-primaryy">rejoindre</span>
           </h2>
           <form className='form-recruit'>
             <input className='input-recruit' placeholder='Nom'/>
             <input className='input-recruit' placeholder='Prénom'/>
             <input className='input-recruit' placeholder='Email'/>
             <input className='input-recruit' placeholder='Téléphone'/>
             <textarea className='message-recruit' placeholder="Message"/>
             <button className="button button-recruit button-primary button-wide-mobile button-sm">Envoyer</button>
           </form>
         </div>
       </div>
     </>
  );
}

export default RecruitSection;
