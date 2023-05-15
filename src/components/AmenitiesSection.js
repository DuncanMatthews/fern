import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import React from "react";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '8px',
  },
  text: {
    fontSize: '16px',
  },
});

function MountainIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M16 1L2 12h7v9h8v-9h7L16 1zm0 5.5L21.5 11H14v4h-4v-4H2.5L16 6.5z"/>
    </SvgIcon>
  );
}

function CityIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M23,5h-6V3c0-0.552-0.447-1-1-1h-2c-0.553,0-1,0.448-1,1v2H9c-1.105,0-2,0.895-2,2v17c0,1.104,0.895,2,2,2h14c1.105,0,2-0.896,2-2V7C25,5.895,24.105,5,23,5z M12,4h4v1h-4V4z M22,24H10V8h12V24z"/>
    </SvgIcon>
  );
}

function WaterIcon(props) {
  return (
    <SvgIcon {...props}>
       <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm-5.92 19.995L22 22H10l-.08-.005L4 27.916V28h24v-.085zM28 4H4v21.084l12-11.998 12 12zM16 15.915L11.915 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    </SvgIcon>
  );
}

const AmenitiesSection = () => {
  const classes = useStyles();

  return (
    
    <div id="amenities">

        <h2 className="wedding-section-heading">Amenities Section</h2>
        <div className="Amenities-wrapper">
          <div className="column-wrap">
            <div className="iikjzje i10xc1ab dir dir-ltr">
                <div className="i4wvyiy i1fpqhzs dir dir-ltr">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}>
                      <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm-5.92 19.995L22 22H10l-.08-.005L4 27.916V28h24v-.085zM28 4H4v21.084l12-11.998 12 12zM16 15.915L11.915 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                      </svg>
                </div>

                <div className="amenities-icon-text">Ceremony Area</div>
            </div>
            <div className="iikjzje i10xc1ab dir dir-ltr">
                <div className="i4wvyiy i1fpqhzs dir dir-ltr">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}>
                      <path d="M31 9v21h-2v-7h-6v7h-2v-7a2 2 0 0 1 1.85-1.995L23 21h6V9h2zM3 9v12h6a2 2 0 0 1 1.995 1.85L11 23v7H9v-7H3v7H1V9h2zm14-2v2.083a6.002 6.002 0 0 1 4.996 5.692L22 15h5v2H17v13h-2V17H5v-2h5a6.002 6.002 0 0 1 5-5.917V7h2zm-1 4a4 4 0 0 0-3.995 3.8L12 15h8a4 4 0 0 0-4-4z"></path>
                      </svg>
                </div>

                <div className="amenities-icon-text">Indoor Event Space</div>
            </div>
            <div className="iikjzje i10xc1ab dir dir-ltr">
                <div className="i4wvyiy i1fpqhzs dir dir-ltr">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}>
                      <path d="M9.238 3l-.203.408a20.366 20.366 0 0 0-1.69 5.01l-.007.032A9.001 9.001 0 0 1 10.16 8c2.262 0 4.444.844 6.124 2.407l.237.229a6.979 6.979 0 0 0 4.948 2.05 6.985 6.985 0 0 0 3.528-.951l-.002-.222c-.071-2.757-.746-5.456-2.03-8.105L22.762 3H9.238zm.92 7c-1.087 0-2.15.249-3.112.726C7.014 11.15 7 11.574 7 12a9 9 0 0 0 9 9c4.06 0 7.706-3.138 8.72-6.919a8.999 8.999 0 0 1-3.252.605 8.976 8.976 0 0 1-6.126-2.408l-.236-.228A6.967 6.967 0 0 0 10.159 10zm13.804-9l.284.523C26.079 4.913 27 8.41 27 12c0 5.4-4.528 10.398-10 10.95V29h6v2H9v-2h6v-6.045C9.394 22.45 5 17.738 5 12c0-3.591.92-7.087 2.754-10.477L8.038 1h15.924z"></path>
                      </svg>
                </div>

                <div className="amenities-icon-text">Reception Area</div>
            </div>
            </div>
            <div className="column-wrap 2">
            <div className="iikjzje i10xc1ab dir dir-ltr">
                <div className="i4wvyiy i1fpqhzs dir dir-ltr">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}>
                      <path d="M12.994 2h2c-.002 2.062-.471 3.344-1.765 5.424l-.753 1.183c-.867 1.391-1.278 2.301-1.418 3.393H9.043c.1-1.069.378-1.966.903-3H6c0 5.523 4.477 10 10 10 5.43 0 9.848-4.327 9.996-9.72L26 9l-3.765.001c-.704 1.177-1.05 2.014-1.177 2.999h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88c1.116-1.791 1.477-2.784 1.478-4.393h2c-.002 1.919-.408 3.162-1.506 5L28 7v2c0 .682-.057 1.35-.166 2H30v2h-2.683a12.039 12.039 0 0 1-5.896 6.709l4.49 9.877-1.821.828-2.006-4.415H17V30h-2v-4H9.916L7.91 30.413l-1.82-.828 4.49-9.877A12.039 12.039 0 0 1 4.682 13H2v-2h2.166a12.058 12.058 0 0 1-.162-1.695L4 9V7h7.127l.389-.609c1.116-1.79 1.477-2.783 1.478-4.392zm-.56 18.461L10.824 24H15v-3.04a11.95 11.95 0 0 1-2.566-.498zM17 20.96v3.04h4.175l-1.609-3.538c-.684.213-1.395.366-2.126.453zm.994-18.96h2c-.002 2.063-.471 3.345-1.765 5.425l-.753 1.183c-.867 1.391-1.278 2.301-1.418 3.393h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88c1.116-1.791 1.477-2.784 1.478-4.393z"></path>
                      </svg>
                </div>

                <div className="amenities-icon-text">Outdoor Event Space</div>
            </div>
            <div className="iikjzje i10xc1ab dir dir-ltr">
                <div className="i4wvyiy i1fpqhzs dir dir-ltr">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}>
                      <path d="M2 31a1 1 0 0 1-1-1 9 9 0 0 1 17.945-1H21c.736 0 1.428-.265 1.971-.739a2.99 2.99 0 0 0 1.022-2.06L24 26V14H13v6h-2v-7a1 1 0 0 1 .883-.993L12 12h13a1 1 0 0 1 .993.883L26 13v2h4a1 1 0 0 1 .993.883L31 16v9a1 1 0 0 1-.883.993L30 26h-4a4.99 4.99 0 0 1-1.714 3.768 4.982 4.982 0 0 1-3.025 1.225L21 31zm3.85-6.637a7.003 7.003 0 0 0-2.693 4.154l-.058.301-.028.182h4.103zM10 23c-.823 0-1.612.142-2.346.403L9.254 29h1.491l1.6-5.598a6.968 6.968 0 0 0-1.854-.385l-.25-.013zm4.151 1.363L12.825 29h4.103l-.027-.182a6.999 6.999 0 0 0-2.75-4.455zM29 17h-3v7h3zM19.994 1c-.002 2.062-.471 3.344-1.765 5.424l-.753 1.183C16.61 8.998 16.198 9.908 16.058 11h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88C17.632 3.6 17.993 2.607 17.994.998zm5 0c-.002 2.062-.471 3.344-1.765 5.424l-.753 1.183C21.61 8.998 21.198 9.908 21.058 11h-2.015c.15-1.613.708-2.836 1.91-4.728l.563-.88C22.632 3.6 22.993 2.607 22.994.998z"></path>
                      </svg>
                </div>

                <div className="amenities-icon-text">On-Site Accommodations</div>
            </div>
            <div className="iikjzje i10xc1ab dir dir-ltr">
                <div className="i4wvyiy i1fpqhzs dir dir-ltr">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}>
                      <path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z"></path>
                      </svg>
                </div>

                <div className="amenities-icon-text">Free parking on premises</div>
            </div>
            </div>
            </div>
    </div>
  );
};

export default AmenitiesSection;
