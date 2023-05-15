import CarouselItem from './CarouselItem';
import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../firebase';

const ThingsToDo = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [ToDoItems, setToDoItems] = useState([]); // Set initial state as empty array

  useEffect(() => {
    const fetchImages = async () => {
      const imagePaths = [
        {
          src: 'gs://fernhall-esta.appspot.com/ThingsToDo/img-1.jpg',
          name: 'Skiing at Elk Mountain',
          description: 'Experience modern luxury at this prestigious home after a long day of skiing at the “Best Overall Mountain in the Mid-Atlantic Region!',
        },
        {
          src: 'gs://fernhall-esta.appspot.com/ThingsToDo/img-2.jpg',
          name: 'Hike or walk on the many trails in the area',
          description: `Whether you're an experienced hiker or just looking for a leisurely walk, there are plenty of trails to explore in the Union Dale area, all offering unique views of the surrounding mountains and forests.`,
        },
        {
          src: 'gs://fernhall-esta.appspot.com/ThingsToDo/img-3.jpg',
          name: 'Visit the wineries in the region.',
          description: `Some popular wineries in the area include Maiolatesi Wine Cellars, Capra Collina Winery, and Nimble Hill Vineyard & Winery. Visitors can take tours of the wineries, taste local wines, and even purchase bottles to take home.`,
        },
        {
          src: 'gs://fernhall-esta.appspot.com/ThingsToDo/img-4.jpg',
          name: 'Lakefront Private Boathouse',
          description: `Take advantage of the lakefront location and go fishing, swimming, kayaking, or paddleboarding on Crystal Lake.`,
        },
        {
          src: 'gs://fernhall-esta.appspot.com/ThingsToDo/img-5.jpg',
          name: 'Have fun at Lahey Fun Park',
          description: 'Visitors can take part in thrilling go-kart races, challenge their friends to mini-golf, or enjoy the classic arcade games. The bumper cars are also a popular attraction, providing a fun and safe way to bump and crash into each other.  ',
        },
        // Add other items here, with their corresponding paths in Firebase Storage
        // ...
      ];

      const fetchedImages = await Promise.all(imagePaths.map(async (image) => {
        const imageRef = ref(storage, image.src);
        const imageUrl = await getDownloadURL(imageRef);
        return {
          ...image,
          image: imageUrl,  // replace `src` key with `image` key
        };
      }));

      setToDoItems(fetchedImages);
    }

    fetchImages();
  }, []);

  const handlePrevClick = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 100); // change 33.33 to 100
    } else {
      setCurrentPosition((ToDoItems.length - 1) * 100); // Loop back to last image
    }
  };


  const handleNextClick = () => {
    if (currentPosition < (ToDoItems.length - 1) * 50) { // check if it's the last image
      setCurrentPosition(currentPosition + 50); // change 33.33 to 100
    } else {
      setCurrentPosition(0); // Loop back to first image
    }
  };

  const handleSwipeLeft = () => {
    if (currentPosition < (ToDoItems.length - 1) * 100) { // check if it's the last image
      setCurrentPosition(currentPosition + 100); // change 33.33 to 100
    }
  };

  const handleSwipeRight = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 100); // change 33.33 to 100
    }
  };

  return (
    <div id="vendors">
      <h2 className="wedding-section-heading">Things to Do</h2>
      <div className="vendor-carousel">
        <button className="vendor-carousel-button prev" onClick={handlePrevClick}>
          Prev
        </button>
        <div className="vendor-carousel-items" style={{ left: `${-currentPosition}%` }}>
          {ToDoItems.map((item, index) => (
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

export default ThingsToDo;
