import React from "react";

export default function Movie(item) {
  return (
    <div className="card w-auto h-auto rounded-lg cursor-pointer">
      <img className="w-full h-full object-cover rounded-lg "
        src={item.image}
        alt=""
      />
    </div>
  );
}
