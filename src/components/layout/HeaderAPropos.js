import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link, useHistory} from 'react-router-dom';

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

  const handleClick2 = () => {
    history.push('/');
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

  // 'site-header' à rajouter si jamais bug de la nav
  return (
     <header
        {...props}
        className={classes}
     >
       <div className="container">
         <div className={
           classNames(
              'site-header',
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
                        <Link to="#vision_conseil" onClick={() => {
                          const vision_conseil = document.querySelector('#vision_conseil');
                          vision_conseil.scrollIntoView({behavior: 'smooth'});
                          closeMenu();
                        }}>
                          Notre vision
                        </Link>
                      </li>
                      <li>
                        <Link to="#notre_approche" onClick={() => {
                          const notre_approche = document.querySelector('#notre_approche');
                          notre_approche.scrollIntoView({behavior: 'smooth'});
                          closeMenu();
                        }}>
                          Notre approche
                        </Link>
                      </li>
                      <li>
                        <Link to="#modes_intervention" onClick={() => {
                          const modes_intervention = document.querySelector('#modes_intervention');
                          modes_intervention.scrollIntoView({behavior: 'smooth'});
                          closeMenu();
                        }}>
                          Nos modes d'intervention
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
                         </li>
                       </ul>}
                    {!hideSignin &&
                       <ul
                          className="list-reset header-nav-right"
                       >
                         <li>
                           <Link to="/" className="button button-primary button-wide-mobile button-sm"
                                 onClick={handleClick2}>Accueil</Link>
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
