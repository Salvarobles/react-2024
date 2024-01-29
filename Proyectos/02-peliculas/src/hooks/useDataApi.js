import { useEffect, useState } from "react";


export default function useDataApi(apiEndPoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndPoint);
        if (!response.ok) throw new Error("Error fetching data");
        const result = await response.json();
        setData(result); //<-- la tengo que guardar en un estado.
      } catch (error) {
        setError(error.message || error.status);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiEndPoint]);

  return { data, loading, error };
}
