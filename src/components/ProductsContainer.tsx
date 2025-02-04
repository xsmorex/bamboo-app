import { useEffect, memo } from "react";
import Card from "./Card";
import { useIntersectionObserver } from "@uidotdev/usehooks";

interface ProductsContainerProps {
  products: Product[];
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}
const ProductsContainer: React.FC<ProductsContainerProps> = ({
  products,
  loading,
  setLimit,
  setOffset,
}) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setLimit((limit) => limit + 10);
      setOffset((offset) => offset + 10);
    }
  }, [entry]);
  if (products.length === 0) {
    return <div>No products found</div>;
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}

        <div ref={ref} />
      </div>
      {loading && (
        <p className="text-center text-base animate-pulse">
          Loading more products.........................
        </p>
      )}
    </>
  );
};

export default memo(ProductsContainer);
