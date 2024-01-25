import NavComponent from "./Components/nav.jsx";
import NavMobile from "./Components/navMobile.jsx";

export default function Home() {
  return (
    <main className="bg-blue-dark">         
       <NavComponent /> 
        <div className="h-screen bg-red-300 gradient-bg">

          <div className="gradient-bg">

            <div className="gradients-container">

              <div className="g1"></div>
              <div className="g2"></div>
              <div className="g3"></div>
              <div className="g4"></div>
              <div className="g5"></div>

            </div>

          </div>
a
        </div>
       <NavMobile />  
    </main>
  );
}
