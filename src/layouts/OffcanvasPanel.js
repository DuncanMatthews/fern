import Link from "next/link";
const OffcanvasPanel = ({ overlyPanel, togglePanel }) => {
  return (
    <div className={`offcanvas-panel ${overlyPanel ? "panel-on" : ""}`}>
      <div className="panel-overlay" onClick={() => togglePanel()} />
      <div className="offcanvas-panel-inner">
        <div className="panel-logo">
          <Link href="/">
            <a>
              <img src="" alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="about-us">
          <h5 className="panel-widget-title">About Us</h5>
          <p>
          A rejuvenated country retreat that has been acquired by the Balfour family in 2019. The homestead is now available for community events and weekly rentals since July 2020. 
          </p>
        </div>
        <div className="contact-us">
          <h5 className="panel-widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="fal fa-map-marker-alt" />
              2819 State Route 247 Clifford, PA 18407
            </li>
            <li>
              <i className="fal fa-envelope-open" />
             
              <a href="mailto:info@fernhallestate.com">info@fernhallestate.com</a>
            </li>
            <li>
              <i className="fal fa-phone" />
              <a href="tel:(503-2885967">503-2885967</a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className="panel-close"
          onClick={(e) => {
            e.preventDefault();
            togglePanel();
          }}
        >
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default OffcanvasPanel;
