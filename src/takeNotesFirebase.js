import {firebaseConfig} from "../FirebaseConfig"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth} from 'firebase/auth'

const takenotesFirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore()
export const auth =getAuth()
