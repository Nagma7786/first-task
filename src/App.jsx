import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/Forgotpassword';

function App() {
  const [page, setPage] = useState('register');

return (
    <>
      {page === 'login' && (
        <Login
          onForgotClick={() => setPage('forgot')}
          onBackClick={() => setPage('register')}
        />
      )}

      {page === 'register' && <Register onLoginClick={() => setPage('login')} />}
      {page === 'forgot' && <ForgotPassword onBackClick={() => setPage('login')} />}
    </>
  );
};

export default App;
