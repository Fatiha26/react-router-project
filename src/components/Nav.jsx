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
              className={({ isActive }) => 
                isActive ? "py-4 px-8 text-slate-700 font-bold" : "py-4 px-8 text-md hover:text-slate-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "py-4 px-8 text-slate-700 font-bold" : "py-4 px-8 text-md hover:text-slate-500"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/service" 
              className={({ isActive }) => 
                isActive ? "py-4 px-8 text-slate-700 font-bold" : "py-4 px-8 text-md hover:text-slate-500"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/project" 
              className={({ isActive }) => 
                isActive ? "py-4 px-8 text-slate-700 font-bold" : "py-4 px-8 text-md hover:text-slate-500"
              }
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "py-4 px-8 text-slate-700 font-bold" : "py-4 px-8 text-md hover:text-slate-500"
              }
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
