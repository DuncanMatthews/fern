
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../../firebase';


const Rooms = ({limit}) => {
  // Initialize with empty array
  const [rooms, setrooms] = useState([]);

  // Fetch image URLs from Firebase Storage
  useEffect(() => {
    const fetchImages = async () => {
      const imagePaths = [
        {
          src: "gs://fernhall-esta.appspot.com/Main House/Rooms/All Rooms/Room-1.jpg",
          title: "East View",
          category: ["View from the east"],
        },
        {
          src: "gs://fernhall-esta.appspot.com/Main House/Rooms/All Rooms/Room-2.jpg",
          title: "West View",
          category: ["View of property from west"],
        },
        {
          src: "gs://fernhall-esta.appspot.com/Main House/Rooms/All Rooms/Room-3.jpg",
          title: "West View",
          category: ["View of property from west"],
        },{
          src: "gs://fernhall-esta.appspot.com/Main House/Rooms/All Rooms/Room-5.jpg",
          title: "West View",
          category: ["View of property from west"],
        },
      ];

      const fetchedImages = await Promise.all(imagePaths.map(async (image) => {
        const imageRef = ref(storage, image.src);
        const imageUrl = await getDownloadURL(imageRef);
        return {
          ...image,
          src: imageUrl,
        };
      }));

      setrooms(fetchedImages);
    }

    fetchImages();
  }, []);

  return (
    <Fragment>
    <div className="row project-row row-images">
    {rooms.slice(0, limit).map((room, index) => (
        <div
          key={index}
          className={`col-lg-4 col-md-6 col-sm-12 project-column cat-1`}
        >
          <div className="project-item-three mb-30 wow fadeInDown">
            <div className="img-holder">
              <img src={room.src} alt={room.title} />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/portfolio-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="#">
                      <a>{room.title}</a>
                    </Link>
                  </h3>
                  <p>
                    {room.category.map((category, i) => (
                      <Fragment key={i}>
                        <a href="#">{category}</a>
                        {i !== room.category.length - 1 && ","}
                      </Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Fragment>
  );
};

export default Rooms;
