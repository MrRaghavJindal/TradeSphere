// src/Auth.js

import React, { useState, useEffect } from 'react';
import { signInWithGoogle, signOutFromGoogle, auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      const response = await signInWithGoogle();
      console.log(response.user.email,response.user.displayName);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutFromGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  return ( 
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Auth;
