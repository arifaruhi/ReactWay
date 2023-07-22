import React  from 'react';
import {Link} from 'react-router-dom';
import classes from './Home.module.css';
import Button from '../../Button';
import Section from '../section/Section';
import Section2 from '../section/Section2';
import Section3 from '../section/Section3';
import Section4 from '../section/Section4';
import Section5 from '../section/Section5';
import Section6 from '../section/Section6';
import ContentItems from './ContentItems';
import { ItemImages1 } from '../../ItemImages';
import { ItemImages2 } from '../../ItemImages';
import { ItemImages3 } from '../../ItemImages';
import { ItemImages4 } from '../../ItemImages';
import { ItemImages5 } from '../../ItemImages';
import LastSection from '../section/LastSection';


const Home = () => {
  const Content1 = ContentItems[0].text1;
  const Content2 = ContentItems[1].text2;
  const Content3 = ContentItems[2].text3;
  const Content4 = ContentItems[3].text4;
  const Content5 = ContentItems[4].text5;


  return (
    <>
    <div className={classes.HomeWrapper}>
       <div className={classes.contentSlider}>
         <p>Become an AI expert! 🤖 Learn how AI can help improve your marketing performance and save you time.</p>
          <Link>Register Now→</Link>
       </div>
       <div className={classes.homeContainer}>
          <div className={classes.rightContainer}>
              <span>Smaller budgets need smarter dollars</span>
              <p>Create, manage, and analyze your display,
                Facebook, Instagram, Pinterest, 
                TikTok, and email campaigns from a single platform.
                AdRoll helps marketers do more with less.
              </p>
               <div className={classes.buttonWrapper}>
                 <Button text='Get Started' variant='color1'/>
                 <Button text='Get In Touch'variant='color2'/>
              </div>
          </div>
          <div className={classes.leftContainer}>
               <img src= 'images/wrapperImg.png' alt='' />
          </div>
        </div>
        <Section 
          title='AdRoll works for the
          scrappy new entrepreneur.'
          items={Content1}
          img={ItemImages1}
          textbtn='Explore automation builder'
          />
          <Section2 
          title='For 15 years, we have been
           the leader in helping our customers
           find their best customers'
           items={Content2}
           img={ItemImages2}
           textbtn='Learn More→'
           />
           <Section3 
            title='Save time and energy by running
             all your campaigns across 500+ platforms
             from one place'
             items={Content3}
             img={ItemImages3}
             textbtn='Explore social ads manager→'
             />

             <Section4 
              title='Our retargeting and brand awareness
               ads make billions of correct choices
               every day'
               items={Content4}
               img={ItemImages4}
               textbtn='Explore retargeting ads→'
               textbtn2='Explore brand awareness ads→'
               />

               <Section5 
                title='Experts to manage your advertising'
                items={Content5}
                img={ItemImages5}
                textbtn='Get the support you deserve→'
                />

                <Section6 />
                <LastSection />
    </div>
    
    </>
  )
}

export default Home