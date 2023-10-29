import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO, USER_AVATAR } from "../components/constants";
import { toggleGptSearchView } from '../utils/gptSlice';

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
            const { uid, email} = user;
            dispatch(
              addUser({
                uid: uid,
                email: email
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
  
    const handleGPTSearchClick = () => {
      //  Toggle GPT Search
      dispatch(toggleGptSearchView());
    }
    return (
        <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img
                className='w-44'
                src={ LOGO } alt="Netflix_LOGO" />
            { user && (
          <div className='flex p-2'>
            <button className='py-2 px-4 m-2 mx-4 my-2 bg-purple-800 text-white rounded-lg'
            onClick={handleGPTSearchClick}>
                  GPT Search
                </button>
                <img alt="usericon" className='w-12 h-12'
                    src={ USER_AVATAR } />
                <button className='text-white' onClick={handleSignOut}>Sign Out</button>
                </div>
            )}
        </div>
    );
};

export default Header;