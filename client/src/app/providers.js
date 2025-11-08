'use client';

import { Provider, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './store/store';
import { useEffect } from 'react';
import { authAPI } from './lib/auth';
import { loginSuccess } from './store/features/authSlice';

// ✅ Separate component that runs inside Provider context
function AuthInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const fetchUser = async () => {
        try {
          const res = await authAPI.getProfile(token);
          if (res) {
            console.log(res);
            dispatch(loginSuccess(res.user)); // ✅ only dispatch valid user data
          }
        } catch (err) {
          console.error('❌ Error fetching user profile:', err);
        }
      };
      fetchUser();
    }
  }, [dispatch]);

  return null; // nothing to render
}

export function Providers({ children }) {
  return (
    <Provider store={store}>
      {/* ✅ Initialize user info only after Redux Provider is available */}
      <AuthInitializer />
      {children}
      <Toaster position="top-right" />
    </Provider>
  );
}
