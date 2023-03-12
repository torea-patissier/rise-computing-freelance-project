import React from 'react';
import Footer from '../components/layout/Footer';
import HeaderAPropos from "../components/layout/HeaderAPropos";

const LayoutAPropos = ({children}) => (
   <>
     <HeaderAPropos navPosition="right" className="headerApropos"/>
     <main className="site-content ">
       {children}
     </main>
     <Footer className="footer-style"/>
   </>
);

export default LayoutAPropos;
