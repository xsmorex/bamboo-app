import { memo } from "react";
import Card from "./Card";
import SkeletonLoader from "./SkeletonLoader";
interface ProductsContainerProps {
  products: Product[];
  loading: boolean;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}
const ProductsContainer: React.FC<ProductsContainerProps> = ({
  products,
  loading,
  setLimit,
}) => {
  const handleLoadMore = () => {
    setLimit((prev) => prev + 10);
  };

  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      {products.length > 1 && loading ? (
        <SkeletonLoader />
      ) : (
        <button
          className="text-2xl text-gray-800 mx-auto block my-10 px-2 py-1 rounded-md cursor-pointer shadow-2xs hover:shadow-xl"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </>
  );
};

export default memo(ProductsContainer);
