import React from 'react'
import estilo from "./ContenidoPelicula.module.css";
import {Link} from "react-router-dom";
import { getMovieImg } from "../assets/getMovieImg";

export default function ContenidoPelicula({movie}) {
  const imageUrl = getMovieImg(movie.poster_path, 300);
    return (
    <li className={estilo.contenido}>
      <Link to={"/movies/" + movie.id}>
    <img className={estilo.imagenpelicula} src={imageUrl} alt={movie.title}/>
    <h2 className={estilo.tituloImagen}>{movie.title}</h2>
    </Link>
    </li>
  )
}
