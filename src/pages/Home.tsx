import useFetchData from "../hooks/useFetchData";
import Card from "../components/Card";
import SkeletonLoader from "../components/SkeletonLoader";

const Home = () => {
  const { data, loading } = useFetchData();

  return (
    <div className="container  p-4">
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {data.map((photo) => (
            <Card key={photo.id} photocardData={photo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
