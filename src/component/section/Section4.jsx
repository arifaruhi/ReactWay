import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Section4.module.css';

function Section4({title, items, img, textbtn, textbtn2}) {
  return (
    <section className={classes.section4}>
    <div className={classes.imgpart}>
         <img src={img} alt='' />
    </div>
    <div className={classes.content}>
      <h1>{title}</h1>
      <p>{items}</p>
      <Link>{textbtn}</Link><br />
      <Link>{textbtn2}</Link>
    </div>
</section>
  )
}

export default Section4