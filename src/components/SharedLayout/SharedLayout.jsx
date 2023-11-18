import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
// import Loader from '../Loader/Loader';
import { Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        {/* <Suspense fallback={<Loader />}> */}
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default SharedLayout;