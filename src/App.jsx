import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog.jsx'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites.jsx'));

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;