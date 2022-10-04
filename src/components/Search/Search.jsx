/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';
import useSearchResults from '../../hooks/use-search-results.js';
import { FormButton } from '../Forms/FormControl';
export default function Search() {
  const {
    infiniteScrollRef,
    nextPage,
    pokemon,
    setPokemon,
    searchParams,
    searchResults,
    searchPokedex,
  } = useSearchResults();
  return <section>
    <SearchForm pokemon={pokemon} setPokemon={setPokemon} onSubmit={searchPokedex} />
    <SearchResults results={searchResults} infiniteScrollRef={infiniteScrollRef}/>
    <FormButton onClick={nextPage}>Moar</FormButton>
  </section>;
}
