import { useState } from "react";
import Link from "next/link";
import classes from './Navigation.module.css';

const Navigation = () => {
   const [isActive, setIsActive] = useState(false)
   const toggleHandler = () => setIsActive(!isActive);

   return (
      <header className={classes.header}>
         <div className={classes.logo}>
            <Link href='/'>Monster Field Guide</Link>
         </div>

         <div className={classes.btn} onClick={toggleHandler}>
            <i className={`${!isActive ? 'fas fa-bars' : 'fas fa-times'} ${classes.toggle}`} aria-hidden='true'></i>
         </div>

         <nav className={`${classes.navBackground} ${isActive ? classes.active : ' '}`}>
            <ul className={classes.list}>
               <li className={classes.item} onClick={toggleHandler}>
                  <Link href='/'>Search</Link>
               </li>
               {/* <li className={classes.item} onClick={toggleHandler}>
                  <Link href='/'>About</Link>
               </li> */}
            </ul>
         </nav>
      </header>
   );
};
export default Navigation;