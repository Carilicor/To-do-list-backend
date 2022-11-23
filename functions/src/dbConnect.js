import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';


import serviceAccount from '../secrets.js' //this is my password for firebase

export default function dbConnect() {
    if(!getApps().length) {
        initializeApp({
            credential: cert(serviceAccount)
        })
    }
    return getFirestore() //this code is used to connect to Firestore
}



