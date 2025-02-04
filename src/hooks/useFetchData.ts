// import { useEffect, useState } from "react";
// import axios from "axios";

// const useFetchData = () => {
//   const [data, setData] = useState<PhotoCardProps[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           //"https://jsonplaceholder.typicode.com/photos"
//           "https://api.escuelajs.co/api/v1/products"
//         );
//         setData(response.data.slice(0, 15));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { data, loading };
// };

// export default useFetchData;
