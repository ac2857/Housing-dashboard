
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function AppLayout(){
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-2">Skip to content</a>
      <Header />
      <main id="main" className="container mx-auto p-4 flex-1">
        <Outlet />
      </main>
      <footer className="border-t p-4 text-sm text-center">
        © Demo • Updated <time>{new Date().getFullYear()}</time>
      </footer>
    </div>
  );
}
