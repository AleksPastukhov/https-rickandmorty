import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GloblStyle from './GlobalStyle';

const Home = lazy(() => import('./pages/Home/Home'));
const Character = lazy(() => import('./pages/Character/Character'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="character/:characterId" element={<Character />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <GloblStyle />
    </div>
  );
};
