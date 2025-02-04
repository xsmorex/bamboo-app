import SkeletonLoader from "../components/SkeletonLoader";
import ProductsContainer from "../components/ProductsContainer";
import useGetProducts from "../hooks/useGetProducts";
import { useState } from "react";

const Home = () => {

  const [limit, setLimit] = useState(10);
  const [offset] = useState(0);
  const {
    data: products,
    errorMsg,
    loading,
  } = useGetProducts({ limit, offset });

  // Loading skeleton when data is fetching
  if (loading && products.length === 0) {
    return (
      <div className="container p-4">
        <SkeletonLoader />
      </div>
    );
  }
  // Throws the error
  if (errorMsg) {
    return (
      <div className="container p-4">
        <p className="text-center text-red-600 text-2xl">{errorMsg}</p>
      </div>
    );
  }

  return (
    <div className="container p-4">
      <ProductsContainer
        products={products}
        loading={loading}
        setLimit={setLimit}
      />
    </div>
  );
};

export default Home;
