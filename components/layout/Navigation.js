import Link from "next/link";
import classes from './Navigation.module.css';
const Navigation = () => {
   return (
      <header className={classes.header}>
         <div className={classes.logo}>
            <Link href='/'>Monster Field Guide</Link>
         </div>
         <nav>
            <ul>
               <li>
                  <Link href='/'>Search</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};
export default Navigation;