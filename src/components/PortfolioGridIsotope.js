import Isotope from "isotope-layout";
import Rooms from "./PropertyFilterViews.js/rooms.js";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import PropertyExteriorPhotos from "./PropertyFilterViews.js/PropertyExteriorPhotos.js";
import Landscape from "./PropertyFilterViews.js/Landscape";
import Bar from "./PropertyFilterViews.js/Bar";

const PortfolioGridIsotope = () => {

 
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState(".cat-1");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-row", {
        itemSelector: ".project-column",
        percentPosition: true,
        masonry: {
          columnWidth: ".project-column",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
        filter: ".cat-1", // add this line
      });
    }, 1000);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

 





  const [limit, setLimit] = useState(5); // Set initial limit

  
  


  return (
    <Fragment>
      <div id="photos" className="row justify-content-center">
        <div className="col-lg-10">
          <div className="portfolio-filter-button text-center mb-60 wow fadeInDown">
            <ul className="filter-btn">
          
              <li
                className={`c-pointer ${activeBtn("cat-1")}`}
                onClick={handleFilterKeyChange("cat-1")}
                data-filter=".cat-1"
              >
                Rooms
              </li>
              <li
                className={`c-pointer ${activeBtn("cat-2")}`}
                onClick={handleFilterKeyChange("cat-2")}
                data-filter=".cat-2"
              >
               Exterior
              </li>
              <li
                className={`c-pointer ${activeBtn("cat-3")}`}
                onClick={handleFilterKeyChange("cat-3")}
                data-filter=".cat-3"
              >
                Landscape
              </li>
              <li
                className={`c-pointer ${activeBtn("cat-4")}`}
                onClick={handleFilterKeyChange("cat-4")}
                data-filter=".cat-4"
              >
                Bar
              </li>
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
                data-filter="*"
              >
                Show All
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row project-row">
        
      <Rooms limit={limit} />
<PropertyExteriorPhotos limit={limit} />
<Landscape limit={limit} />
<Bar limit={limit} />
        
      </div>
    </Fragment>
  );
};
export default PortfolioGridIsotope;
