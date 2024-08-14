import Nav from "./nav"
import about from "../assets/image/about.jpg"
const About = () => {
  return (
    <>
      <Nav />
      <section className="py-8 px-12 text-center">
         <div>
           <img src={about} alt="about img" />           
         </div>
         <div>
           <h2>Welcome to Our World</h2>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, 
              exercitationem! Repellendus, at. Explicabo corrupti dolorem fugit culpa cumque.
           </p>

         </div>
      </section>
    </>
  )
}

export default About