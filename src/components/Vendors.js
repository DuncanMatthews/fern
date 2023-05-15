// ReviewsSection.jsx
import CarouselItem from '../components/CarouselItem';
import { useState } from 'react';
import { Swipeable } from 'react-swipeable';
import React from 'react';

const carouselItems = [
    
  {
    name: 'Tent / Tables / Chairs',
    image: '/assets/images/service/single-img-1.jpg',
    description: 'Boulevard Rental offers a wide range of rental options for tents, tables, and chairs. Visit their website at boulevardrental.com for more information.',
  },
  {
    name: 'Catering',
    image: '/assets/images/service/single-img-1.jpg',
    description: `The Epicurean Delight and Constantino's Catering both offer delicious catering services for events. Cables UnionDale is also a great option, as they have a catering kitchen in Carbondale, PA. The Blind Pig and Chef Rob also provide excellent catering services, with Chef Rob even offering on-site cheffing for multi-day events.`,
  },
  {
    name: 'Florists',
    image: '/assets/images/service/single-img-1.jpg',
    description: 'House of Flowers Forest City is a trusted florist for events. They can provide beautiful floral arrangements that will make your event even more special.',
  },
  {
    name: 'Bakery',
    image: '/assets/images/service/single-img-1.jpg',
    description: `Lynn Sandy's Bakery offers delicious baked goods for events. From cakes to pastries, they have you covered.`,
  },
  {
    name: 'Flower Farms',
    image: '/assets/images/service/single-img-1.jpg',
    description: 'Patchwork Planting and Flower Garage are both great options for locally sourced flowers.',
  },
  {
    name: 'Portable Event Facilities:',
    image: '/assets/images/service/single-img-1.jpg',
    description: 'Reeves Rent-A-John offers special event porta-potties for events over 50 attendees.',
  },
  {
    name: 'Other Lodging',
    image: '/assets/images/service/single-img-1.jpg',
    description: 'Crystal Lake Hotel and Hotel Anthracite are both great options for event guest lodging. There is also a neighboring lakeside Airbnb rental available for those who prefer a more private lodging option.',
  },
  // Add more items as needed
];


const VendorSection = () => {

   const [currentPosition, setCurrentPosition] = useState(0);

  const handlePrevClick = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 33.33);
    }
  };

  const handleNextClick = () => {
    if (currentPosition < 66.67) {
      setCurrentPosition(currentPosition + 33.33);
    }
  };

  const handleSwipeLeft = () => {
    if (currentPosition < 66.67) {
      setCurrentPosition(currentPosition + 33.33);
    }
  };

  const handleSwipeRight = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 33.33);
    }
  };


  
  return (
    
    <div id="vendors">
    <h2 className="wedding-section-heading">Recommended Vendors</h2>
    
      <div className="vendor-carousel">
        <button className="vendor-carousel-button prev" onClick={handlePrevClick}>
          Prev
        </button>
     
        <div className="vendor-carousel-items" style={{ left: `${-currentPosition}%` }}>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} item={item} />
            
          ))}
        </div>
      
        <button className="vendor-carousel-button next" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
 
  );
};

export default VendorSection;