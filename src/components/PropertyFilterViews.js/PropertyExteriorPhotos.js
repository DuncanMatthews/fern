import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../../firebase';

const PropertyExteriorPhotos = ({limit}) => {
  // Initialize with empty array
  const [exterior, setexterior] = useState([]);

  // Fetch image URLs from Firebase Storage
  useEffect(() => {
    const fetchImages = async () => {
      const imagePaths = [
        {
          src: "gs://fernhall-esta.appspot.com/Main House/Exterior/PropertyExteriorPhotos-1.jpeg",
          title: "East View",
          category: ["View from the east"],
        },
        {
          src: "gs://fernhall-esta.appspot.com/Main House/Exterior/PropertyExteriorPhotos-2.jpeg",
          title: "East View",
          category: ["View from the east"],
        },
        {
          src: "gs://fernhall-esta.appspot.com/Main House/Exterior/PropertyExteriorPhotos-3.jpeg",
          title: "East View",
          category: ["View from the east"],
        },
        {
          src: "gs://fernhall-esta.appspot.com/Main House/Exterior/PropertyExteriorPhotos-4.jpeg",
          title: "East View",
          category: ["View from the east"],
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

      setexterior(fetchedImages);
    }

    fetchImages();
  }, []);

  return (
    <Fragment>
    <div className="row project-row row-images">
    {exterior.slice(0, limit).map((room, index) => (
        <div
          key={index}
          className={`col-lg-4 col-md-6 col-sm-12 project-column cat-2`}
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
                    <Link href="/portfolio-details">
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

export default PropertyExteriorPhotos;
