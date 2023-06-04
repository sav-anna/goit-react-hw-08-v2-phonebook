import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import AppBar from './AppBar';
import '../index.css';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <p className="footer">Contacts App created by Anna Sibova</p>
      </footer>
    </div>
  );
};
