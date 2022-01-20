import classes from './Instructions.module.css';
const Instructions = () => {
   return (
      <div className={classes['text-box']}>
         <h1 className={classes.heading}>Welcome to your Monster Field Guide!</h1>
         <p>Search or browse all available monsters from Monster Hunter: World / Iceborne</p>
      </div>
   );
};
export default Instructions;