import { useRef } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import classes from './MonsterSearch.module.css';

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
      <motion.form 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1}}
         transition={{ duration: .7}}
         onSubmit={submitHandler}
         className={classes.form}
      >
         <input placeholder="Monster Name" className={classes.input} type="text" id="name" ref={nameInputRef} autoComplete="off" required></input>
         <label className={classes.label} htmlFor="name">Monster Name</label>
         <button className={classes.btn}>Search Monster</button>
      </motion.form>
   );
};
export default MonsterSearch;