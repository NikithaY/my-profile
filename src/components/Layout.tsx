import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Navigation />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
