// React import
import { useState } from 'react';

// Package import
import { Routes, Route } from 'react-router-dom';
import { getCookie } from './shared/cookie';
import { useSelector } from 'react-redux';

// Page import
import Landing from './pages/landing/Landing';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Write from './pages/write/Write';
import Kakao from './shared/kakao';
import Movie from './pages/movie/Movie';
import Drama from './pages/drama/Drama';
import Entertain from './pages/entertain/Entertain';
import Detail from './pages/detail/Detail';

const App = () => {
  const loginStatus = useSelector((state) => state.member.loginStatus);

  return (
    <Routes>
      <Route path="/" exact="true" element={<Landing />} />
      <Route path="/signin" element={loginStatus ? <Landing /> : <SignIn />} />
      <Route path="/signup" element={loginStatus ? <Landing /> : <SignUp />} />
      <Route path="/write/:category" element={loginStatus ? <Write /> : <Landing />} />
      <Route path="/kakao/callback" element={<Kakao />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/drama" element={<Drama />} />
      <Route path="/entertain" element={<Entertain />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
};

export default App;
