import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

 export const AuthListener = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('logged in');
        // navigate('/');
      } else {
        console.log('logged out');
        // navigate('/login');
      }
    });
  }, [navigate]);
};


