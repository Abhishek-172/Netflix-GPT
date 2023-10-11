import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    console.log('I am a user object', user);
    const handleSignOut = () => {
            const auth = getAuth();
            signOut(auth).then(() => {
                // Sign-out successful.
                /*
                    After sucessful signout do one thing
                    1. Navigate the user to the Home Page
                */
                navigate("/");
            }).catch((error) => {
            // An error happened.
        });
    }
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