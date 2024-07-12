import {db} from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanUp
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    // register
    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null)

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {displayName: data.displayName});

            setLoading(false);
            return user;
            
        } catch (error) {    
            let systemErrorMessage;
    
            if (error.code === "auth/weak-password") {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres";
            } else if (error.code === "auth/email-already-in-use") {
                systemErrorMessage = "E-mail já cadastrado";
            } else {
                systemErrorMessage = "Erro ao criar usuário";
            }
    
            setError(systemErrorMessage);
            setLoading(false);
        }
    };

    // logout - sign out
    const logout = () => {
        
        checkIfIsCancelled();

        signOut(auth)

    };

    // login - sign in

    const login = async(data) => {

        checkIfIsCancelled()
        setLoading(true)
        setError(false)

        try {
            
            await signInWithEmailAndPassword(auth, data.email, data.password);
            
            setLoading(false);

        } catch (error) {
            
            let systemErrorMessage;

            console.log(error)

            if (error.code === "auth/invalid-credential") {
                systemErrorMessage = "Email ou Senha inválidos"
            } else {
                systemErrorMessage = "Erro ao logar!"
            }

            setError(systemErrorMessage)
            
            setLoading(false)
        
        }

    }

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    };
}