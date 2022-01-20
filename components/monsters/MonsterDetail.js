import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import classes from './MonsterDetail.module.css';

const MonsterDetail = props => {
   let [background, setBackground] = useState('');

   useEffect(() => {
      const randomizer = Math.floor(Math.random() * props.locales.length);
      let randomImage = props.locales[randomizer].image;
      setBackground(randomImage)
   }, []);
   

   const monsterElements = props.elements[0] === null ? 'None' : props.elements.join(', ');
   const monsterAilments = props.ailments[0] === null ? 'None' : props.ailments.join(', ');

   const monWeaknesses = (monAttr, i) => {
      const monStars = monAttr.stars > 0 ? '⭐️ '.repeat(monAttr.stars) : '❌'.repeat(monAttr.stars + 1);
      const monCondition = !monAttr.condition ? '' : `(${monAttr.condition})`;
      return <li className={classes['monster__item']} key={i}>{monAttr.element} {monStars} {monCondition}</li>;
   };

   return (
      <>
         <div 
            className={classes.header} 
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, 1)), url(${background})` }} 
         >
            <motion.div
               className={classes['header__box']}
               initial={{ opacity: 0, }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1 }}
            >
               <img className={classes['header__img']} src={props.image} />
            </motion.div>
         </div>
         <motion.div
            className={classes.monster}
            initial={{ translateY: 20, }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.4 }}
         >
            <div className={classes['monster__header']}>
               <div className={classes['monster__header--1']}>
                  <img src={props.icon} className={classes['monster__header--icon']} />   
                  <h2 className={classes['secondary-heading']}>
                     <span className={classes['secondary-heading--main']}>{props.name}</span>
                     <span className={classes['secondary-heading--sub']}>{props.species}</span>
                  </h2>
               </div>
            </div>

            <div className={classes['monster__container']}>
               <div className={classes['monster__grid']}>
                  <div>
                     <div className={classes['monster__info--text']}>
                        <p className={classes['monster__info--subject']}>Elements</p>
                        <p className={classes['monster__info--element']}>{monsterElements}</p>
                     </div>

                     <div className={classes['monster__info--text']}>
                        <p className={classes['monster__info--subject']}>Ailments</p>
                        <p className={classes['monster__info--element']}>{monsterAilments}</p>
                     </div>

                     <div className={classes['monster__info--text']}>
                        <p className={classes['monster__info--subject']}>Description</p>
                        <p>{props.description}</p>
                     </div>

                     <div className={classes['monster__info--text']}>
                        <p className={classes['monster__info--subject']}>Useful Information</p>
                        <p>{props.usefulInfo}</p>
                     </div>
                  </div>


                  <div className={classes['monster__list']}>
                     <div className={classes['monster__list--info']}>
                        <p className={classes['monster__info--subject']}>Weakness</p>
                        <ul>
                           {props.weaknesses[0] === null ? 'none' : props.weaknesses.map(monWeaknesses)}
                        </ul>
                     </div>

                     <div className={classes['monster__info--list']}>
                        <p className={classes['monster__info--subject']}>Resistances</p>
                        <ul>
                           {props.resistances[0] === null ? 'none' : props.resistances.map(monWeaknesses)}
                        </ul>
                     </div>
                  </div>
               </div>

               <div className={classes['monster__header']}>
                  <div className={classes['monster__header--2']}>
                     <img src='https://i2.lensdump.com/i/rVO2hC.png' className={classes['monster__header--icon']} />
                     <h2 className={classes['secondary-heading']}>
                        <span className={classes['secondary-heading--main']}>Locations</span>
                     </h2>
                  </div>
               </div>

               <div className={classes['monster__locales']}>
                  {props.locales.map((locale, i) => (
                     <div className={classes['monster__locale']} key={i}>
                        <img className={classes['monster__locale--img']} src={locale.image} />
                        <p className={classes['monster__locale--text']}>{locale.name}</p>
                     </div>
                  ))}
               </div>
            </div>
         </motion.div>
      </>
   );
};
export default MonsterDetail;