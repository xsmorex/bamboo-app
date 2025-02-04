import { useState, useEffect } from "react";
import { base_url } from "../utils/api";
import axios from "axios";

const useGetProducts = ({
  offset,
  limit,
}: {
  offset: number;
  limit: number;
}) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          base_url + `/products?offset=${offset}&limit=${limit}`
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
        setErrorMsg("Error loading products");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [offset, limit]);

  return { data, loading, errorMsg };
};

export default useGetProducts;
