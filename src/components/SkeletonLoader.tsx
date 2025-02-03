import fallBackImage from "../assets/default_image.jpg";
import { Heart, Share2, Info } from "lucide-react";

const SkeletonLoader = () => {
  return (
    //Loading card container
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 ">
      {[...Array(15)].map((_, index) => (
        // Loading cards
        <div
          className="relative  bg-white rounded-xl shadow-lg transform transition-all duration-500 animate-pulse w-full max-w-[400px]  lg:max-w-none mx-auto"
          key={index}
        >
          {/* card image */}
          <div className="relative overflow-hidden rounded-t-xl aspect-square  ">
            <img
              src={fallBackImage}
              className="w-full h-full object-cover transform transition-transform duration-700"
            />

            {/* Overlay on Hover */}
            <div
              className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 }`}
            ></div>
          </div>
          {/* card title */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-17"></h3>

            <div className="flex items-center text-sm text-gray-600 mb-4">
              <Info className="w-4 h-4 mr-1" />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <button
                className={` opacity-50  flex cursor-pointer items-center gap-1 px-3 py-1 rounded-full transition-colors`}
              >
                <Heart className={`w-5 h-5 `} />
              </button>

              <button className=" opacity-50  flex cursor-pointer items-center gap-1 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
// <div
//   className="w-full h-full  overflow-hidden shadow-lg border border-red-600 animate- bg-gray-300"
//   key={index}
// >
//   <div className="w-full h-[200px] border border-blue-700"></div>
//   <div className="px-6 py-4 h-[200px]">
//     <div className="font-bold text-xl mb-2 w-full h-[300px]" />
//   </div>
// </div>
