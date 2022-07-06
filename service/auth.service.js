import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import UserDataService from '../service/user.service'

class AuthDataService {
    signup(email, password, params) {
        return createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
            const user = userCredential.user;
            await UserDataService.postUser({ uid: user.uid, ...params })
        })
    }

    login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    logout() {
        return signOut(auth);
    };
}

export default new AuthDataService()