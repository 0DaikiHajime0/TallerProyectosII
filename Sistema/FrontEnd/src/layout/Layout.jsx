import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

export const Layout = () => {
  return (
    <div className="container">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
