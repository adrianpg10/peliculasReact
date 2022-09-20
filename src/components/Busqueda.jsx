import estilo from "./Busqueda.module.css";
import {FaSearch} from "react-icons/fa";
import { useSearchParams } from "react-router-dom";


export function Busqueda() {
   const [query,setQuery] = useSearchParams();
   const search = query.get("search");

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className={estilo.busquedaContenedor}>
           <div className={estilo.cajabusqueda}>
            <input 
            className={estilo.inputBusqueda} type="text" 
            placeholder="Title"
            autoFocus
            value={search ?? ""}
            aria-label="Search Movies"
            onChange={(e)=> {
                const value = e.target.value;
                setQuery({search:value});              
            }}/>
             <FaSearch className={estilo.botonBusqueda} />
            </div> 
        </form>
    )
}
