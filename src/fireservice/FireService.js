import {
    getFirestore,
    query,
    getDocs,
    where,
    collection,
    addDoc,
} from "firebase/firestore";


 export class FireService{
    
  static async  getAll(db,collection_name) {
        let data=[];
        const querySnapshot = await getDocs(collection(db, collection_name));
        querySnapshot.forEach((doc) => {
        data.push(doc._document.data.value.mapValue.fields);
        });
        return data;

      }

 }

    