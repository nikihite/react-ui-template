import { Link, Outlet } from 'react-router-dom';

export default function Halloween() {
  return (
    <div>
      <h1>HALLOWEEN PAGE</h1>
      <nav>
        <Link to="">Ghosts</Link>
        <Link to="vampires">Vampires</Link>
        <Link to="witches">Witches</Link>
      </nav>
      <Outlet/>
    </div>
  );
}
