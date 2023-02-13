import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({children}) => (
   <>
       <Header navPosition="right" className="reveal-from-bottom header-sticky"/>
     <main className="site-content ">
       {children}
     </main>
     <Footer className="footer-style"/>
   </>
);

export default LayoutDefault;
