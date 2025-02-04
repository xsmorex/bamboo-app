import SkeletonLoader from "../components/SkeletonLoader";
import ProductsContainer from "../components/ProductsContainer";
import { useState, useEffect, useCallback } from "react";
import { base_url } from "../utils/api";
import axios from "axios";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch data function
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        base_url + `/products?offset=${offset}&limit=${limit}`
      );
      // Avoid duplicates by checking if the product already exists
      setProducts((prev) => {
        const newProducts = res.data.filter(
          (newProduct: Product) =>
            !prev.some((prevProduct) => prevProduct.id === newProduct.id)
        );
        return [...prev, ...newProducts];
      });
    } catch (error) {
      console.log(error);
      setErrorMsg("Error loading products");
    } finally {
      setLoading(false);
    }
  }, [offset, limit]);

  // Fetch data when offset or limit changes
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log("products", products);

  return (
    <div className="container p-4">
      {loading && products.length === 0 ? (
        <SkeletonLoader />
      ) : errorMsg ? (
        <p className="text-center text-red-600 text-2xl">{errorMsg}</p>
      ) : (
        <ProductsContainer
          products={products}
          setLimit={setLimit}
          loading={loading}
          setOffset={setOffset}
        />
      )}
    </div>
  );
};

export default Home;
