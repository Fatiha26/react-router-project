import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <section className="flex justify-around items-center py-4 bg-slate-200">
         <div>
           <a href="#" className="text-2xl uppercase font-bold">Logo</a>
         </div>
         <nav>
            <ul className="flex ">
              <li><NavLink to="/" className="py-4 px-8">Home</NavLink></li>
              <li><NavLink to="/about" className="py-4 px-8">About</NavLink></li>
              <li><NavLink to="/service" className="py-4 px-8">Services</NavLink></li>
              <li><NavLink to="/project" className="py-4 px-8">Project</NavLink></li>
              <li><NavLink to="/contact" className="py-4 px-8">Contact</NavLink></li>
            </ul>
         </nav>
      </section>
    </>
  )
}

export default Nav