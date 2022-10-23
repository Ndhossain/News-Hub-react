/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import '../firebase.config';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
        const auth = getAuth();
        const unsub = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            setCurrentUser(user);
        });
        return unsub;
    }, [loading]);

    const authProviderLogin = (provider) => {
        try {
            const auth = getAuth();
            return signInWithPopup(auth, provider);
        } catch (err) {
            console.log(err);
            setError(error);
        }
    };

    const createUser = async (email, password, name, navigate) => {
        setError('');
        setLoading(true);
        const auth = getAuth();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                displayName: name,
            });
            await sendEmailVerification(auth.currentUser);
            const user = auth.currentUser;
            setCurrentUser({
                ...user,
            });
            if (!loading) {
                navigate();
            }
            navigate();
        } catch (err) {
            setLoading(false);
            console.log(err);
            setError(err);
        }
    };

    const logoutUser = () => {
        const auth = getAuth();
        console.log('called');
        return signOut(auth);
    };

    const loginUser = async (email, password, navigate) => {
        setError('');
        setLoading(true);
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            if (!loading) {
                navigate();
            }
        } catch (err) {
            setLoading(false);
            console.log(err);
            setError(err);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                loading,
                authProviderLogin,
                logoutUser,
                createUser,
                loginUser,
                error,
                setError,
            }}
        >
            {!loading && children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
