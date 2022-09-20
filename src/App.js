import estilo from "./App.module.css";
import { BrowserRouter as Router, Routes, Route,Link, Navigate } from "react-router-dom";
import DetallePelicula from "./pages/DetallePelicula";
import LandingPage from "./pages/LandingPage";
import { Icon } from '@iconify/react';
import { Busqueda } from '../src/components/Busqueda';


function App() {
  return (
    <div>
    <Router>
      <header>
        <div className={estilo.cabecera}>
        <Link to="/"><h1 className={estilo.titulo}>Movies <span>Rezadri</span></h1></Link>
        <Link to="/"><h1 className={estilo.tituloMovil}>M<span>R</span></h1></Link>
        <div className={estilo.logos}>
        <Busqueda />
        <a href='https://github.com/adrianpg10'><Icon icon="akar-icons:github-fill" className={estilo.iconredes}/></a>
          <a href='https://www.linkedin.com/in/adrian-perez-gomez/'><Icon icon="entypo-social:linkedin-with-circle" className={estilo.iconredes}/></a>
        </div>
        </div>
      
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<DetallePelicula/>} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>
       
      </main>
     
    </Router>
    
   
    </div>
    
  );
}

export default App;
