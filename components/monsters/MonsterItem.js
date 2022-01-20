import classes from './MonsterItem.module.css';
import { useRouter } from 'next/router';

const MonsterItem = props => {
   const router = useRouter();
   const showDetailsHandler = () => router.push('/' + props.id);

   return (
      <div className={classes.monster}>
         <div className={classes.info}>
            <img className={classes.icon} src={props.icon} />
         </div>
         <button className={classes.btn} onClick={showDetailsHandler}>{props.name}</button>
      </div>
   );
};
export default MonsterItem;