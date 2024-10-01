import React from "react";
import "./Modal.css"; // Importation du fichier CSS

export default function Modal({ name, description, image, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Modal</h3>
        <p>{name}</p>
        <img src={image} alt="image" className="modal-image" />
        <p>{description}</p>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}
