import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import ArticleText from './pages/ArticleText';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profiles/:username' element={<Profile/>}/> {/* /profile/:username 하면 */}
                                                                 {/* Profile.js 의 useParams에서도 params.username으로 받아야 함. */}
      </Route>
      <Route path='/articles' element={<Articles />}>
        <Route path=':id' element={<Article/>}/>
        <Route path=':id' element={<ArticleText/>}/> {/** Articles.js에서 Outlet 해줘도 안보임. child(0)만 들어갈수있음. */}
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
