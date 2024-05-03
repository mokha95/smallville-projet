import "./PlaceDetail.css";
import { useState } from "react";

export default function PlaceDetail({ name, description, imageUrl }) {
  const [showDetauls, setShowDetails] = useState(false);
  return (
    <>
      <h1>Place details</h1>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt="" />
    </>
  );
}
