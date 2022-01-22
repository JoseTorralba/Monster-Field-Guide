import classes from './MonsterItem.module.css';
import { useRouter } from 'next/router';

const MonsterItem = props => {
   const router = useRouter();
   const showDetailsHandler = () => router.push('/' + props.id);

   return (
      <div className={classes.monster} onClick={showDetailsHandler}>
         <div className={classes.info}>
            <img className={classes.icon} src={props.icon} />
         </div>
         <p className={classes.text}>{props.name}</p>
      </div>
   );
};
export default MonsterItem;