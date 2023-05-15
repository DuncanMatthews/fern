import React from 'react';


const CarouselItem = ({ item }) => {
  return (
    <div className="vendor-carousel-item">
      <img src={item.image} alt={item.name} className="vendor-carousel-image" />
      <div className="vendor-carousel-text-overlay">
        <h3 className="vendor-carousel-item-name">{item.name}</h3>
        <p className="vendor-carousel-item-description">{item.description}</p>
      </div>
    </div>
  );
};

export default CarouselItem;