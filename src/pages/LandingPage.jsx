import React from 'react'

import  PeliculasGrid from "../components/PeliculasGrid"
import { useDebounce } from "../hooks/useDebounce";
import { useSearchParams } from 'react-router-dom';

export default function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search");
  const debouncedSearch = useDebounce(search, 300);

  return (
    <div>

      <PeliculasGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
