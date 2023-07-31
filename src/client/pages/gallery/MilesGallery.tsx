import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        //   observer.unobserve(imageRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust this value based on your requirements
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={isVisible ? src : ''}
      alt={alt}
    />
  );
};

const MilesGallery = () => {
  const [showImages, setShowImages] = useState(false);
  const [visibleImageCount, setVisibleImageCount] = useState(9);

  const handleButtonClick = () => {
    setVisibleImageCount(prevCount => prevCount + 3);
  };

  const images = [
    { src: 'path/to/image1.jpg', alt: 'Image 1' },
    { src: 'path/to/image2.jpg', alt: 'Image 2' },
    { src: 'path/to/image3.jpg', alt: 'Image 3' },
    // Add more image objects as needed
  ];

  return (
    <div>
      {!showImages && (
        <button onClick={() => setShowImages(true)}>Load Images</button>
      )}

      {showImages && (
        <div>
          {images.slice(0, visibleImageCount).map((image, index) => (
            <LazyImage key={index} src={image.src} alt={image.alt} />
          ))}
          {visibleImageCount < images.length && (
            <button onClick={handleButtonClick}>Load More Images</button>
          )}
        </div>
      )}
    </div>
  );
};

export default MilesGallery;
