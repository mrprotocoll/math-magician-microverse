import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';
import 'styles/Navbar.css';

const Layout = () => (
  <div className="container">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
