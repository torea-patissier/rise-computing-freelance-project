import React from 'react';


const NotreVisionDuConseil = () => {
  const cards = [
    {
      id: 1,
      title: 'Suivi de carrière personnalisé:',
      class: 'revel-from-left',
      content: 'Un collaborateur épanoui est un collaborateur engagé. Nous mettons l’accent à offrir des opportunités en phase avec les exigences de chacun et leur fournir un management de proximité.'
    },
    {
      id: 2,
      title: 'Un recrutement d\'excellence: ',
      class: 'revel-from-left',
      content: ' Expertise et engagement sont les points-clés dans la composition de nos équipes. Nous sélectionnons des profils ayant étudié dans les meilleures écoles qui souhaitent se surpasser tout en partageant notre vision et nos valeurs.'
    },
    {
      id: 3,
      title: 'De la création de valeur:',
      class: 'revel-from-left',
      content: 'Ajouter de la valeur à nos clients nous est primordiale. Ainsi, nous accordons une haute importance à la compréhension de vos besoins qu’à la mise en place de solution personnalisée et éprouvée.'
    },
    {
      id: 4,
      title: 'Une réponse sur mesure:',
      class: 'revel-from-left',
      content: 'Nous croyons que chaque client est unique. C\'est pourquoi, grâce à notre communauté d\'experts, nous co-réalisons des solutions personnalisées en réponse à vos besoins spécifiques.'
    }
  ];

  return (
     <div id="vision_conseil" className="notreVisionParent container">
       <div className="hero-title-logo is-revealed reveal-from-top">
         <h2 className="mt-32 h2Title">
           Notre vision du <span className="text-color-primaryy ml-16">Conseil</span>
         </h2>
       </div>
       <div className="grille pb-32">
         {cards.map(card => (
            <div key={card.id} className="grille-item">
              <h5 className="titleNotreVision">{card.title}</h5>
              <p className="text-xs text-justify mt-16">{card.content}</p>
            </div>
         ))}
       </div>
     </div>
  );
};

export default NotreVisionDuConseil;
