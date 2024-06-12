import { memo, useEffect, useState } from 'react';

function customUseEffect (url, deps = []) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [url, ...deps]);

  return { data, error };
};

export default customUseEffect;
