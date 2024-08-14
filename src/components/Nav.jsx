import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <section>
         <div>
           <a href="#">Logo</a>
         </div>
         <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/service">Services</NavLink></li>
              <li><NavLink to="/project">Project</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
         </nav>
      </section>
    </>
  )
}

export default Nav