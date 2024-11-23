import { createContext, useEffect, useState } from "react"
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const loggedUser = currentUser?.email || user?.email;
            const loggedUserEmail = {email: loggedUser};
            setUser(currentUser);
            setLoading(false);
            // console.log(currentUser);
            if (currentUser) {
                axios.post("http://localhost:5000/jwt", loggedUserEmail, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUserEmail, {
                    withCredentials: true
                })
                .then(res=>{
                    console.log(res.data);
                })
            }

        })
        return () => {
            unSubscribe();
        }
    }, [])


    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }



    const info = {
        user, loading, signup, login, logout
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider