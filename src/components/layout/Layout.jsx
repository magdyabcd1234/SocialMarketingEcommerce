
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Preloader from './Preloader';
import CustomCursor from '../ui/CustomCursor';
import Footer from './Footer';

export default function Layout() {
    const { pathname } = useLocation();

    // Scroll to top every route change (SPA equivalent of a fresh page load)
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" })
    }, [pathname]);

  return (
    <>
    <Preloader />
    <CustomCursor />
      <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}
