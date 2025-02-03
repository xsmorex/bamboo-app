import React from "react";
import { Photo } from "../types";

interface ListItemProps {
  photo: Photo;
}

const ListItem: React.FC<ListItemProps> = ({ photo }) => {
  console.log("image", photo);
  return (
    <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
      <img
        src={photo.thumbnailUrl}
        alt={photo.title}
        className="w-20 h-20 rounded"
      />
      <div>
        <h2 className="text-lg font-semibold">{photo.title}</h2>
        <p className="text-sm text-gray-500">{photo.url}</p>
      </div>
    </div>
  );
};

export default ListItem;
