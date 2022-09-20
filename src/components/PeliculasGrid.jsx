import React, { useEffect,useState } from "react";
import ContenidoPelicula from "./ContenidoPelicula";
import {get} from "../assets/httpClient";
import estilo from "./PeliculasGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export default function PeliculasGrid({search}) {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
    style={{
      overflow:"hidden"
    }
    }
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={estilo.moviesGrid}>
        {movies.map((movie) => (
          <ContenidoPelicula key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
