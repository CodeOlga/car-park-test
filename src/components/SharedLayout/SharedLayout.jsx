import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default SharedLayout;