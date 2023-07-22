import React from 'react';
import Button from '../../Button';
import classes from './LastSection.module.css';

const LastSection = () => {
  return (
    <div className={classes.lastSection}>
        <div className={classes.contentPart}>
            <h1>Increase ROI. Learn from your data.<br /> Maximize sales.</h1>
        </div>
        <div className={classes.buttonContainer}>
            <Button text='GET STARTED' variant='color1'/>
            <Button text='GET IN TOUCH' variant='color2'/>
        </div>
    </div>
  )
}

export default LastSection