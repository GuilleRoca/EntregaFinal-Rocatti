// sedear la db
import { collection , addDoc } from 'firebase/firestore' ;
import db from './firebase-config.js' ;
import products from '../products.js' ;

const itemsRef = collection (db, "items" )

const promise = products.map(product => addDoc(itemsRef, product))

Promise.all(promise) 
    .then(() => {
        console.log("terminado")
        process.exit(0)
    })
