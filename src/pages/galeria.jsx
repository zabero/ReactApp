import React, { useState } from "react";
import "./galeria.css";

// Import images
import img1 from "../assets/galeria/image1.jpg";
import img2 from "../assets/galeria/image2.jpg";
import img3 from "../assets/galeria/image3.jpg";
import img4 from "../assets/galeria/image4.jpg";

const images = [img1, img2, img3, img4]; // Array of imported images

export const Galeria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="gallery-container">
      <div className="gallery">
        <div className="gallery-item">
          <img
            src={images[currentIndex]}
            alt={`Gallery item ${currentIndex + 1}`}
            onError={(e) => {
              e.target.onerror = null; // Prevent looping
              e.target.src = "path/to/placeholder/image.jpg"; // Placeholder image
            }}
          />
        </div>
        <div className="gallery-controls">
          <button onClick={goToPrevious}>Previous</button>
          <button onClick={goToNext}>Next</button>
        </div>
      </div>
    </div>
  );
};
