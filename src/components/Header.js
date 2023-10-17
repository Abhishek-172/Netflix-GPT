import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
            signOut(auth).then(() => {
                // Sign-out successful.
                /*
                    After sucessful signout do one thing
                    1. Navigate the user to the Home Page
                */
            }).catch((error) => {
                // An error happened.
                navigate("/error");
        });
    }
    useEffect(() => {
        // This onAuthStateChanged function returns a unsubscrbe function
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });
    
        // This is how we unmounts by returning this function.
        // It will unsubscribe to this onAuthStateChanged when component unmounts
        return () => unsubscribe();
      }, []);
    return (
        <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img
                className='w-44'
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix_LOGO" />
            { user && (
            <div className='flex p-2'>
                <img alt="usericon" className='w-12 h-12'
                    src={ user?.photoURL} />
                <button className='text-white' onClick={handleSignOut}>Sign Out</button>
                </div>
            )}
        </div>
    );
};

export default Header;