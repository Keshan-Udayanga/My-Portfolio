import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../Styles/imageModel.css";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageModal = ({ images, onClose }) => {
  const [current, setCurrent] = useState(0);

  // lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const currentMedia = images[current];
  const isVideo = typeof currentMedia === "string" && (
    currentMedia.includes(".mp4") ||
    currentMedia.includes(".webm") ||
    currentMedia.includes(".ogg")
  );

  const modalContent = (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content slider" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <button className="nav-btn left" onClick={prevImage}>
          <FaChevronLeft />
        </button>

        {isVideo ? (
          <video
            key={currentMedia}
            src={currentMedia}
            className="slider-image"
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img
            key={currentMedia}
            src={currentMedia}
            alt={`project-${current}`}
            className="slider-image"
          />
        )}

        <button className="nav-btn right" onClick={nextImage}>
          <FaChevronRight />
        </button>

        <p className="image-count">
          {current + 1} / {images.length}
        </p>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ImageModal;
