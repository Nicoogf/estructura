import NavComponent from "./Components/nav.jsx";
import NavMobile from "./Components/navMobile.jsx";

export default function Home() {
  return (
    <main className="bg-blue-dark">         
       <NavComponent />  
       <NavMobile />  
    </main>
  );
}
