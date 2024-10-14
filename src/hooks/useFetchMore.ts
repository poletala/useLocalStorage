import { useEffect, useState } from 'react';
import axios from 'axios';

type FetchParams = {
  URL: string;
  limit: number;
};

export const useFetchMore = ({URL, limit}: FetchParams) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limitFetch, setLimitFetch] = useState(limit);

  useEffect(() => {
    setIsLoading(true);

    axios(`${URL}?limit=${limitFetch}`)
      .then(res => {
        setData(res.data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  }, [URL, limitFetch]);
    

  const fetchMore = () => {
    setLimitFetch(prev => prev + 5);
  };

  return {data, error, isLoading, fetchMore, limitFetch};
};