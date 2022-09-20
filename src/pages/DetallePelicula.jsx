import React, { useEffect, useState } from "react";
import estilo from "./DetallePelicula.module.css";
import { useParams } from "react-router-dom";
import { get } from "../assets/httpClient";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../assets/getMovieImg";

export default function DetallePelicula() {

  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  
  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if(isLoading){
    return <Spinner/>
  }

 
  
  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className={estilo.detalleContenedor}>
      <img
        className={estilo.col + " " + estilo.imagenPelicula}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={estilo.col + " " + estilo.detallePelicula}>
        <h2 className={estilo.titulo}>{movie.title}</h2>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Summary:</strong> {movie.overview}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Runtime:</strong> {movie.runtime} min
        </p>
      </div>
    </div>
  );
}
