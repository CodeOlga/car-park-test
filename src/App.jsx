import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog.jsx'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites.jsx'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Catalog />} />
        <Route path="/products" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;