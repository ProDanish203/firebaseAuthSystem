import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Router } from "./Config/Router";

function App() {
  return (
    <>
    <Header/>
    <div className="container w-full p-2 min-h-[88vh]">    

      <Router/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
