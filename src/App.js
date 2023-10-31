// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './comp/Navbar/Navbar';
import Home from './comp/Home/Home';
import SignInForm from './comp/SignInForm/SignInForm';
import Footer from './comp/Footer/Footer';
import Registration from './comp/Registration/registration';

const SignIn = () => (
  <div>
    <SignInForm />
  </div>
);

const SignUp = () => (
  <div>
    <Registration />
  </div>
);

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;

