import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="flex justify-around items-center py-4 bg-slate-200">
      <div>
        <Link to="/" className="text-2xl uppercase font-bold">Logo</Link>
      </div>
      <nav>
        <ul className="flex">
          <li>
            <NavLink 
              to="/" 
              className="py-4 px-8 text-md hover:text-slate-500"
              activeClassName="text-slate-700 font-bold"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className="py-4 px-8 text-md hover:text-slate-500"
              activeClassName="text-slate-700 font-bold"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/service" 
              className="py-4 px-8 text-md hover:text-slate-500"
              activeClassName="text-slate-700 font-bold"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/project" 
              className="py-4 px-8 text-md hover:text-slate-500"
              activeClassName="text-slate-700 font-bold"
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className="py-4 px-8 text-md hover:text-slate-500"
              activeClassName="text-slate-700 font-bold"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
