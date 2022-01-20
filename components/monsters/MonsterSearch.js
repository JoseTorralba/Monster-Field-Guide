import { useRef } from "react";
import { useRouter } from "next/router";
import classes from './MonsterSearch.module.css';
import { motion } from "framer-motion";

const MonsterSearch = props => {
   const router = useRouter();
   const nameInputRef = useRef();

   const submitHandler = (event) => {
      event.preventDefault();
      const enteredMonster = nameInputRef.current.value.toLowerCase().trim();

      props.monsters.map(monster => {   
         if (monster.name === enteredMonster) {
            router.push('/' + monster.id)
         }
      })
   };

   return (
      <form className={classes.form} onSubmit={submitHandler}>
         <motion.div
            initial={{
               opacity: 0, 
            }}
            animate={{ opacity: 1}}
            transition={{ duration: .6}}
         >
            <input placeholder=" " className={classes.input} type="text" id="name" ref={nameInputRef} required></input>
            <label className={classes.label} htmlFor="name">Search for a monster...</label>
         </motion.div>

         {/* <div>
            <button className={classes.btn}>Search Monster</button>
         </div> */}
      </form>
   );
};
export default MonsterSearch;