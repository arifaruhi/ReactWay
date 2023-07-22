import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Section5.module.css';

function Section5({title, items, img, textbtn}) {
  return (
    <section className={classes.section5}>
    <div className={classes.content}>
      <h1>{title}</h1>
      <p>{items}</p>
      <Link>{textbtn}</Link>
    </div>
    <div className={classes.imgpart}>
         <img src={img} alt='' />
    </div>
</section>
  )
}

export default Section5