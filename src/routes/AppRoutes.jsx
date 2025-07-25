import { Routes, Route } from 'react-router-dom';
import { Protect, RedirectToSignIn } from '@clerk/clerk-react';
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

    <Route
      path="/community"
      element={
        <Protect fallback={<RedirectToSignIn />}>
          <Community />
        </Protect>
      }
    />

    <Route
      path="/thread/:id"
      element={
        <Protect fallback={<RedirectToSignIn />}>
          <ThreadDetail />
        </Protect>
      }
    />

    <Route
      path="/tools"
      element={
        <Protect fallback={<RedirectToSignIn />}>
          <Tools />
        </Protect>
      }
    />

    <Route
      path="/news"
      element={
        <Protect fallback={<RedirectToSignIn />}>
          <News />
        </Protect>
      }
    />

    <Route
      path="/profile"
      element={
        <Protect fallback={<RedirectToSignIn />}>
          <Profile />
        </Protect>
      }
    />

    <Route
      path="/about"
      element={
        <Protect fallback={<RedirectToSignIn />}>
          <About />
        </Protect>
      }
    />
  </Routes>
);

export default AppRoutes;
