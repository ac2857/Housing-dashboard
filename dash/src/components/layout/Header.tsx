
import { NavLink } from 'react-router-dom';

export default function Header(){
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold">NJ Housing Assistance</a>
        <nav aria-label="Primary">
          <ul className="flex gap-6">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/programs" className="hover:underline">Programs</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
