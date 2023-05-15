import PageBanner from "../src/components/PageBanner";

import Layout from "../src/layouts/Layout";
import dynamic from "next/dynamic";

import Carousel, { Modal, ModalGateway } from "react-images";
import { useState, useCallback } from "react";
import { photoGallery } from "../Data/photo-gallery"; 

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import VendorSection from "../src/components/Vendors";
import Box from '@mui/material/Box';
import AmenitiesSection from "../src/components/AmenitiesSection";
import WeddingAboutSection from "../src/components/weddingAboutSection";
import ContactForm from "../src/components/contact-form-1";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import NavBar from "../src/components/navbar";
import PricingSection from "../src/components/pricing";


const PortfolioGridIsotope = dynamic(
  () => import("../src/components/PortfolioGridIsotope"),
  {
    ssr: false,
  }
);








const Portfolio = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };


  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


  return (
    <Layout>
      <PageBanner pageTitle={"Weddings"} pageName="Book your wedding" />
      <section
        className="project-grid-page p-r z-1 pt-170 pb-130"
        id="project-filter"
      >
        <div className="container">
          <div className="row justify-content-center">
          </div>
         
          <div>
          <div id="photos">
    <ImageList variant="masonry" cols={4} gap={10}>
      {photoGallery.slice(0, 6).map((item, index) => (
        <ImageListItem key={item.src}>
       <img
      src={`${item.src}?w=${item.width}&h=${item.height}&fit=crop&auto=format`}
      alt={item.title}
      loading="lazy"
      onClick={() => {
        setCurrentImage(index);
        setViewerIsOpen(true);
      }}
    />
        </ImageListItem>
      ))}
    </ImageList>
  </div>

  <ModalGateway>
    {viewerIsOpen ? (
      <Modal onClose={closeLightbox}>
        <Carousel
          currentIndex={currentImage}
          views={photoGallery.map(x => ({
            ...x,
            srcset: x.srcSet,
            caption: x.title
          }))}
        />
      </Modal>
    ) : null}
  </ModalGateway>
</div>

<div><br></br></div>

<div className="Venue-Info">
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item>   <NavBar /> <WeddingAboutSection /> <AmenitiesSection /><PricingSection /><VendorSection />
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
      <ContactForm />
   </Item>
        </Grid>
      </Grid>
    </Box>
    </div>




          
          
        </div>
      </section>
    </Layout>
  );
};




export default Portfolio;


