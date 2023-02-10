import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link, useHistory, Route} from 'react-router-dom';
import Recrutement from "../sections/Recrutement";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
                  className,
                  navPosition,
                  hideNav,
                  hideSignin,
                  bottomOuterDivider,
                  bottomDivider,
                  ...props
                }) => {

  const history = useHistory();

  const handleClick = () => {
    history.push('/recrutement');
  };

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }

  const classes = classNames(
     'site-header',
     bottomOuterDivider && 'has-bottom-divider',
     className
  );

  return (
     <header
        {...props}
        className={classes}
     >
       <div className="container">
         <div className={
           classNames(
              'site-header-inner mt-32',
              bottomDivider && 'has-bottom-divider'
           )}>
           {!hideNav &&
              <>
                <button
                   ref={hamburger}
                   className="header-nav-toggle"
                   onClick={isActive ? closeMenu : openMenu}
                >
                  <span className="screen-reader">Menu</span>
                  <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
                </button>
                <nav
                   ref={nav}
                   className={
                     classNames(
                        'header-nav',
                        isActive && 'is-active'
                     )}>
                  <div className="header-nav-inner">
                    <ul className={
                      classNames(
                         'list-reset text-xs',
                         navPosition && `header-nav-${navPosition}`
                      )}>
                      <li>
                        <Link to="#nos_domaines_dexpertises" onClick={() => {
                          const nos_domaines_dexpertises = document.querySelector('#nos_domaines_dexpertises');
                          nos_domaines_dexpertises.scrollIntoView({behavior: 'smooth'});
                          closeMenu();
                        }}>
                          Nos domaines d'expertises
                        </Link>
                      </li>

                      <li>
                        <Link to="#nos_parternaires" onClick={() => {
                          const nos_parternaires = document.querySelector('#nos_parternaires');
                          nos_parternaires.scrollIntoView({behavior: 'smooth'});
                          closeMenu();
                        }}>
                          Nos partenaires
                        </Link>
                      </li>

                      <li>
                        <Link to="#nous_contacter" onClick={() => {
                          const nous_contacter = document.querySelector('#nous_contacter');
                          nous_contacter.scrollIntoView({behavior: 'smooth'});
                          closeMenu();
                        }}>
                          Nous contacter
                        </Link>
                      </li>
                    </ul>
                    {!hideSignin &&
                       <ul
                          className="list-reset header-nav-right"
                       >
                         <li>
                           <Link to="/recrutement" className="button button-primary button-wide-mobile button-sm"
                                 onClick={handleClick}>Nous rejoindre</Link>
                           <Route path="/recrutement" component={Recrutement}/>
                         </li>
                       </ul>}
                  </div>
                </nav>
              </>}
         </div>
       </div>
     </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
