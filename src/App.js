// Package import
import {Routes, Route} from 'react-router-dom'

// Page import 
import Landing from './pages/landing/Landing';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
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
      <Route path='/movie' element={<Movie />} />
      <Route path='/drama' element={<Drama />} />
      <Route path='/entertain' element={<Entertain />} />
      <Route path='/detail' element={<Detail />} />
      <Route path='*' element={<Landing />} />
    </Routes>
  );
}

export default App;
 