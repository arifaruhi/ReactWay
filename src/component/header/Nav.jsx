import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../../Button';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <>
      <div className={classes.nav}>
        <ul> 
            <li><Link className={classes.logo}>AdRoll</Link></li>
            <li><Link>Why AdRoll</Link></li>
            <li><Link>Marketing Platform</Link></li>
            <li><Link>For Ecommerce</Link></li>
            <li><Link>Pricing</Link></li>
            <li><Link>Resources</Link></li>
        </ul>
        <div className={classes.navbtn}>
             <Button text='Log in' variant='noneBackground'/>
             <Button text='Get Started' variant='color1'/>
        </div>
        </div>
    </>
  )
}

export default Nav