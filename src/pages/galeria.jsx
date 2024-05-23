import React from "react";
import "./galeria.css";

// Import images
import img1 from "../assets/galeria/image1.jpg";
import img2 from "../assets/galeria/image2.jpg";
import img3 from "../assets/galeria/image3.jpg";
import img4 from "../assets/galeria/image4.jpg";

const images = [img1, img2, img3, img4]; // Array of imported images

export const Galeria = () => {
  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img
              src={img}
              alt={`Gallery item ${index + 1}`}
              onError={(e) => {
                e.target.onerror = null; // Prevent looping
                e.target.src = "path/to/placeholder/image.jpg"; // Placeholder image
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
