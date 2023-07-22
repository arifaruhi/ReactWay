import React from 'react';
import classes from './Section6.module.css';
import ContentItems from '../home/ContentItems';
import { Logo, Last } from '../../ItemImages';



function Section6() {
   const content = ContentItems[5].text6;
      const MedalImg = [
          {
            id:1,
            img: 'https://images.g2crowd.com/uploads/report_medal/image/1004063/medal.svg',
          },
          {  
            id:2,
            img: 'https://images.g2crowd.com/uploads/report_medal/image/1004067/medal.svg',
          },
          {
            id:3,
            img: 'https://images.g2crowd.com/uploads/report_medal/image/1004104/medal.svg'
          },
          {
            id:4,
            img: 'https://images.g2crowd.com/uploads/report_medal/image/1004109/medal.svg'
          },
          {
            id:5,
            img: 'https://images.g2crowd.com/uploads/report_medal/image/1004082/medal.svg'
          }
      ]
        
   console.log(MedalImg)
  return (
    <section className={classes.section6}>
         <div className={classes.wrapper}>
             <div className={classes.content}>
                <div className={classes.logo}>
                   <img src={Logo} alt=''/>
                </div>
                <div className={classes.paragraph}>
                   <p>{content}</p>
                </div>
             </div>
             <div className={classes.content2}>
                 <img src={Last} alt='' />
                 <h2>Adroll Customers Make <br /> <span>$165B</span> <br />in sales every year</h2>
             </div>
         </div>
          <div className={classes.lastbadge}>
              {
                MedalImg.map((item) => (
                   <img key={item.id}src={item.img} alt="" />
               ))
              }

          </div>
    </section>
  )
}

export default Section6