import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

const userCollectionRef = collection(db, 'users')
const userRef = "users"

class UserDataService {

    getAllUser = () => {
        return getDocs(userCollectionRef)
    }

    getUser = (id) => {
        const user = doc(db, userRef, id)
        return getDoc(user)
    }

    postUser = (newUser) => {
        return addDoc(userCollectionRef, newUser)
    }

    updateUser = (id, updateUser) => {
        const user = doc(db, userRef, id)
        return updateDoc(user, updateUser)
    }

    deleteUser = (id) => {
        const user = doc(db, userRef, id)
        return deleteDoc(user)
    }

}


export default new UserDataService()