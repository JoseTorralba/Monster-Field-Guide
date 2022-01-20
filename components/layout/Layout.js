import Navigation from "./Navigation";
import classes from './Layout.module.css';

const Layout = props => {
   return (
      <div>
         <Navigation />
         <main>{props.children}</main>
         <footer className={classes.footer}>
            <div className="row">
               <p>&copy; 2022 Designed & Developed by Jose Torralba</p>
            </div>
         </footer>
      </div>
   );
};
export default Layout;