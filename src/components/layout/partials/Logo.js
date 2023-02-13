import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0 is-revealed">
        <Link to="/">
          <Image
            className=''
            src={require('./../../../assets/images/logo.svg')}
            alt="Open"
            width={300}
            height={300} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;
