import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Community from '../pages/Community';
import ThreadDetail from '../pages/ThreadDetail';
import Tools from '../pages/Tools';
import News from '../pages/News';
import Profile from '../pages/Profile';
import About from '../pages/About';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/community" element={<Community />} />
    <Route path="/thread/:id" element={<ThreadDetail />} />
    <Route path="/tools" element={<Tools />} />
    <Route path="/news" element={<News />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default AppRoutes;
