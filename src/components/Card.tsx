import { SyntheticEvent, useState } from "react";
import { Maximize2, Heart, Share2, Info } from "lucide-react";

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const { title, price, images, category } = product;
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => setIsLiked(!isLiked);
  const handleShare = () => {
    navigator
      .share?.({
        title,
        url: images[0],
      })
      .catch(() => {
        console.log("error sharing");
      });
  };

  const likeColor = isLiked
    ? "text-red-500 bg-red-50"
    : "text-gray-600 hover:bg-gray-50";

  return (
    <div
      className="relative group  bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 w-full max-w-[400px] lg:max-w-none mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* card image */}
      <div className="relative overflow-hidden rounded-t-xl aspect-square  ">
        <img
          src={images[0]}
          onError={(e: SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = category.image;
          }}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            className="p-2 bg-white rounded-full transform hover:scale-110 transition-transform cursor-pointer"
            onClick={() => window.open(category.image, "_blank")}
          >
            <Maximize2 className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
      {/* card title */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
          {title}
        </h3>

        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Info className="w-4 h-4 mr-1" />
          <span>
            $ {price} • Title {title}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <button
            className={`flex cursor-pointer items-center gap-1 px-3 py-1 rounded-full transition-colors ${likeColor}`}
            onClick={handleLike}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
            <span>{isLiked ? "Liked" : "Like"}</span>
          </button>

          <button
            className="flex cursor-pointer items-center gap-1 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-50 transition-colors"
            onClick={handleShare}
          >
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
