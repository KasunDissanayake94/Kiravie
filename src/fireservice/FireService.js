import {
    getFirestore,
    query,
    getDocs,
    where,
    addDoc,
} from "firebase/firestore";


 export class FireService{
    
  static async  getAll(db,collection_name) {
        console.log("CAL : getAll");
        const response = db.collection(collection_name);
        const data = await response.get();
        data.docs.forEach(item=>{
          console.log(item.data());
        })

        return  data.docs;

      }

 }

    