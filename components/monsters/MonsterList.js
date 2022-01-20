import { useState } from "react";
import MonsterItem from "./MonsterItem";
import classes from './MonsterList.module.css';
import { motion } from "framer-motion";

const MonsterList = props => {
   const [pages] = useState(Math.round(props.monsters.length / props.dataLimit));
   const [currentPage, setCurrentPage] = useState(1);

   const goToNextPage = () => setCurrentPage(page => page + 1);
   const goToPreviousPage = () => setCurrentPage(page => page - 1);

   const changePage = (event) => {
      const pageNumber = Number(event.target.textContent);
      setCurrentPage(pageNumber);
   };

   const getPaginatedData = () => {
      const startIndex = currentPage * props.dataLimit - props.dataLimit;
      const endIndex = startIndex + props.dataLimit;
      return props.monsters.slice(startIndex, endIndex);
   };

   const getPaginationGroup = () => {
      let start = Math.floor((currentPage - 1) / props.pageLimit) * props.pageLimit;
      return new Array(props.pageLimit).fill().map((_, i) => start + i + 1);
   };

   return (
      <div>
         <div className={classes.pagination}>
            <button onClick={goToPreviousPage} className={`${classes.prev} ${currentPage === 1 ? `${classes.disabled}` : ''}`}>
               Prev
            </button>

            {getPaginationGroup().map((pageNum, i) => (
               <button
                  key={i}
                  onClick={changePage}
                  className={`${classes.paginationItem} ${currentPage === pageNum ? `${classes.active}` : null}`}
               >
                  <span>{pageNum}</span>
               </button>
            ))}

            <button onClick={goToNextPage} className={`${classes.next} ${currentPage === pages ? `${classes.disabled}` : ''}`}>
               Next
            </button>
         </div>

         <div className={classes.grid}>
            {getPaginatedData().map((monster, i) => (
               <motion.div
                  key={i}
                  initial={{
                     opacity: 0, 
                     translateY: 20,
                  }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.1, delay: i * 0.1 }}
               >
                  <MonsterItem
                     name={monster.name}
                     id={monster.id}
                     icon={monster.icon}
                  />
               </motion.div>
            ))}
         </div>
      </div>
   );
};
export default MonsterList;