import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar.jsx';
import Footer from '../Components/Footer';

function RootLayout() {
  const location = useLocation();

  // Scroll to top (or to hash target) on route change
  useEffect(() => {
    // If there's a hash (e.g. #section), try to scroll to that element
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id) || document.querySelector(location.hash);
      if (el && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    // Default: scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
