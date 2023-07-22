import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Section2.module.css'

function Section2({title, items, img, textbtn}) {
  return (
    <section className={classes.section2}>
    <div className={classes.imgpart}>
         <img src={img} alt='' />
    </div>
    <div className={classes.content}>
      <h1>{title}</h1>
      <p>{items}</p>
      <Link>{textbtn}</Link>
    </div>
</section>
  )
}

export default Section2