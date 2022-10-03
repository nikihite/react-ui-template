import SearchForm from './SearchForm.jsx';
import YoMomma from './Jokes.jsx';
import { FormButton } from '../Forms/FormControl.jsx';
import { useLocation } from 'react-router-dom';
import { yoMommaGetAll } from '../../services/jokes.js';
import styles from './Search.css';
import { useState } from 'react';

export default function Search() {
  const { search } = useLocation();
  const query = new URLSearchParams(search, [search]);
  const type = query.get('type');
  console.log('type', type);
  const searchText = query.get('searchText');
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState(null);
  const onSubmit = async (searchFormData) => {
    setPage(1);
    setFormData(searchFormData);
    const yoMommaResults = await yoMommaGetAll(1, searchFormData);
    setSearchResults(yoMommaResults.results);
  };
  const more = async () => {
    setPage(page + 1);
    const yoMommaResults = await yoMommaGetAll(page + 1, formData);
    setSearchResults(searchResults.concat(yoMommaResults.results));
  };
  return <section>
    <SearchForm
      type={type}
      searchText={searchText}
      onSubmit={onSubmit}
    />
    <ul className={styles.yoMommaResultsList}>
      {searchResults.map(result => {
        return <li key={result._id} className={styles.searchResult}>
          <YoMomma yomomma={result} />
        </li>;
      })}
    </ul>
    { searchResults.length > 0
      ? <FormButton onClick={more}>moar</FormButton>
      : ''
    }
  </section>;
}
