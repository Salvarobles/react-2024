import { useState } from "react";
import { useEffect } from "react";


export function useDataApi(apiEndPoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndPoint);
        if (!response.ok) throw new Error("Error fetching data");
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e.message || e.status);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndPoint]);

  return { data, loading, error };
}
