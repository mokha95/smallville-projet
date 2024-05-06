import "./PlaceDetail.css";
import { useState } from "react";

export default function PlaceDetail({
  showdetails,
  name,
  description,
  imageUrl,
}) {
  return (
    <>
      {showdetails && (
        <div>
          <h1>{name}</h1>
          <img src={imageUrl} alt={name} />
          <p>{description}</p>
        </div>
      )}
    </>
  );
}
