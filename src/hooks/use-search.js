import { useEffect, useState } from 'react';
import { jokesGetAll } from '../services/jokes.js';

export default function useSearch() {

  const [jokes, setJokes] = useState([]);

  const searchEffect = () => {
    jokesGetAll().then(jokes => setJokes(jokes.map(t => t.joke)));
  };

  useEffect(() => searchEffect(), []);

  return {
    jokes,
  };
}
