import Nav from "./nav"
import home from "../assets/image/bg.jpg"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const learn = () =>{
      navigate("/about");
    }
    

  return (
    <>
        <Nav />
        <section>
        <div>
           <h2 className="font-bold text-3xl">Welcome to Our World</h2>
           <p className="text-md mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, 
              exercitationem! Repellendus, at. Explicabo corrupti dolorem fugit culpa cumque.
           </p>
           <button className="border border-slate-600 px-5 py-2 mt-4 text-lg font-bold"
                   onClick={()=>learn()}>
                   Learn More
          </button>
         </div>
         <div>
           <img src={home} alt="about img" className=" w-auto" />           
         </div>
        </section>
    </>
  )
}

export default Home