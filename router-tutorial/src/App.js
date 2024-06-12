import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/profile/:username' element={<Profile/>}/> {/* /profile/:username 하면 */}
                                                              {/* Profile.js 의 useParams에서도 params.username으로 받아야 함. */}
    </Routes>
  );
}

export default App;
