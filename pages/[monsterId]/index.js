import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import MonsterDetail from "../../components/monsters/MonsterDetail";

const MonsterDetails = (props) => {

   const monsterName = props.monsterData.name.split(" ");
   for (var i = 0; i < monsterName.length; i++) {
      monsterName[i] = monsterName[i].charAt(0).toUpperCase() + monsterName[i].slice(1);
   };

   const capitalizedName = monsterName.join(" ");
   return (
      <>
         <Head>
            <title>Monster: {capitalizedName}</title>
            <meta name="description" content={props.monsterData.description} />
         </Head>
         <MonsterDetail 
            ailments={props.monsterData.ailments}
            description={props.monsterData.description}
            elements={props.monsterData.elements}
            icon={props.monsterData.icon}
            image={props.monsterData.render}
            locales={props.monsterData.locales}
            name={props.monsterData.name}
            resistances={props.monsterData.resistances}
            species={props.monsterData.species}
            usefulInfo={props.monsterData.usefulInfo}
            weaknesses={props.monsterData.weaknesses}
         />
      </>
   );
};

export async function getStaticPaths() {
   const client = await MongoClient.connect('mongodb+srv://jose:RAdW8aQ7KzXWlR6m@cluster0.kzqyo.mongodb.net/monsters?retryWrites=true&w=majority');
   const db = client.db();
   const monstersCollection = db.collection('monster');
   const monsters = await monstersCollection.find({}, { id: 1 }).toArray();
   client.close();

   return {
      fallback: false,
      paths: monsters.map(monster => ({
         params: {
            monsterId: monster._id.toString()
         }
      }))
   }
}

export async function getStaticProps(context) {
   const monsterId = context.params.monsterId;
   const client = await MongoClient.connect('mongodb+srv://jose:RAdW8aQ7KzXWlR6m@cluster0.kzqyo.mongodb.net/monsters?retryWrites=true&w=majority');
   const db = client.db();
   const monstersCollection = db.collection('monster');
   const specificMonster = await monstersCollection.findOne({ _id: ObjectId(monsterId) });
   client.close();

   return {
      props: {
         monsterData: {
            ailments: specificMonster.ailments,
            description: specificMonster.description,
            elements: specificMonster.elements,
            icon: specificMonster.icon,
            id: specificMonster._id.toString(),
            locales: specificMonster.locales,
            name: specificMonster.name,
            render: specificMonster.render,
            resistances: specificMonster.resistances,
            species: specificMonster.species,
            usefulInfo: specificMonster.useful_info,
            weaknesses: specificMonster.weaknesses,
         },
      }
   };
};
export default MonsterDetails;