import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'calculator', text: 'Calculator' },
    { path: 'quote', text: 'Quote' },
  ];

  return (
    <nav className="navbar">
      <h2>MP Math Magician</h2>
      <ul className="navlinks">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
