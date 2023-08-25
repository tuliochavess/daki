import { useState, useEffect } from "react";
import { DataItem } from "../../api/request/db-request";

function useRequest() {
  const [data, setData] = useState<DataItem[]>([]);
  const [filters, setFilters] = useState<DataItem>();

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = new URLSearchParams(
        filters as unknown as Record<string, string>
      );
      const apiUrl = `http://localhost:3000/data?${queryParams.toString()}`;

      try {
        const response = await fetch(apiUrl);
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filters]);

  return { data, filters, setFilters };
}

export default useRequest;
