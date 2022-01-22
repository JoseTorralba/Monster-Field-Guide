import { MongoClient } from 'mongodb';
import Head from 'next/head';
import MonsterList from '../components/monsters/MonsterList';
import MonsterSearch from '../components/monsters/MonsterSearch';
import classes from './index.module.css';
import Instructions from '../components/ui/Instruction';

const HomePage = props => {
   return (
      <div className={classes.header}>
         <Head>
            <title>Monster Hunter Field Guide</title>
            <meta name="description" content="Search or browse all available monsters from Monster Hunter: World / Iceborne" />
         </Head>

         <div className='row'>
            <Instructions />
            
            <MonsterSearch monsters={props.monsters} />

            <MonsterList 
               monsters={props.monsters} 
               pageLimit={4}
               dataLimit={18}
            />
         </div>
      </div>
   );
};

export async function getStaticProps() {
   const client = await MongoClient.connect('mongodb+srv://jose:RAdW8aQ7KzXWlR6m@cluster0.kzqyo.mongodb.net/monsters?retryWrites=true&w=majority');
   const db = client.db();
   const monstersCollection = db.collection('monster');
   const monsters = await monstersCollection.find().toArray();;
   client.close();

   return {
      props: {
         monsters: monsters.map(monster => ({
            ailments: monster.ailments,
            description: monster.description,
            elements: monster.elements,
            icon: monster.icon,
            id: monster._id.toString(),
            locales: monster.locales,
            name: monster.name,
            render: monster.render,
            resistances: monster.resistances,
            species: monster.species,
            usefulInfo: monster.useful_info,
            weaknesses: monster.weaknesses,
         }))
      }
   };
};
export default HomePage;