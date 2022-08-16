// Package import
import {Routes, Route} from 'react-router-dom'

// Page import 
import Landing from './pages/landing/Landing';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Write from './pages/write/Write';
import Kakao from './shared/kakao'
import Movie from './pages/movie/Movie';
import Drama from './pages/drama/Drama';
import Entertain from './pages/entertain/Entertain';
import Detail from './pages/detail/Detail';

function App() {
  return (
    <Routes>
      <Route path='/'  exact='true' element={<Landing />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/write/:category' element={<Write />} />
      <Route path='/kakao' element={<Kakao />} />
      <Route path='/movie' element={<Movie />} />
      <Route path='/drama' element={<Drama />} />
      <Route path='/entertain' element={<Entertain />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='*' element={<Landing />} />
    </Routes>
  );
}

export default App;
 