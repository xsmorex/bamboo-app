// interface PhotoCardProps {
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
//   albumId: number;
// }
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}
