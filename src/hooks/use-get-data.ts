import React, { useState, useEffect } from "react";
import { getData, Item } from "../api";

export function useGetData(searchValue: string) {
  const [data, setData] = useState<Item[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await getData();
        if (result) {
          const filteredData = searchValue
            ? result.filter((item) =>
                item.label.toLowerCase().includes(searchValue.toLowerCase())
              ) || []
            : result;

          setData(filteredData);
          setLoading(false);
        }
      } catch (err) {
        throw err;
      }
    };

    fetchData();
  }, [searchValue]);

  return { data, loading };
}
