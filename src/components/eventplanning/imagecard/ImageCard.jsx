import React from 'react';
import './ImageCard.css'; // Optional: For custom styles

const ImageCard = (item) => {
    console.log(item)
  return (
    <div className="image-card">
      <img src={item.imageUrl} alt="image" className="image-card__image" />
      <div className="image-card__content">
        <p className="image-card__description">{item.description}</p>
        <p className="image-card__price">${item.price}</p>
      </div>
    </div>
  );
};

export default ImageCard;
