import Nav from "./nav"
import about from "../assets/image/about.jpg"
const About = () => {
  return (
    <>
      <Nav />
      <section className="py-8 px-12 text-center">
         <div>
           <img src={about} alt="about img" className="h-96 w-full" />           
         </div>
         <div>
           <h2 className="font-bold text-3xl">Welcome to Our World</h2>
           <p className="text-md mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, 
              exercitationem! Repellendus, at. Explicabo corrupti dolorem fugit culpa cumque.
           </p>
           <button>Learn More</button>
         </div>
      </section>
    </>
  )
}

export default About