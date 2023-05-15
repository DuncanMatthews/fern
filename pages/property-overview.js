import PageBanner2 from "../src/components/PageBanner-2";
import Layout from "../src/layouts/Layout";
import { useState, useCallback } from "react";
import NavBar from "../src/components/navbar";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import dynamic from "next/dynamic";
import PropertyAboutSection from "../src/components/PropertyAboutSection";
import AmenitiesSection from "../src/components/AmenitiesSection";
import PricingSection from "../src/components/pricing";
import ThingsToDo from "../src/components/ThingsToDo";



const PropertyOverview = () => {



 

   
  
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
        <PageBanner2 pageTitle={"Property Overview"} pageName="Property Overview" />
  
       
      
        <section
          className="project-grid-page p-r z-1 pt-170 pb-130"
          id="project-filter"
        >
  
          
  
  
  
  
  
          <div className="container">

         <PortfolioGridIsotope />
  
  
  
            <div className="row justify-content-center">
            </div>
           
            <div>
       
  
   
  </div>
  
  <div><br></br></div>
  
  <div className="Venue-Info">
  <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Item>
              <NavBar /> <PropertyAboutSection /> <AmenitiesSection /><PricingSection /><ThingsToDo />
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
         <div>  <h1>Section1</h1></div>
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
  
  
  
  
  export default PropertyOverview;
  
  
  
  const PortfolioGridIsotope = dynamic(
    () => import("../src/components/PortfolioGridIsotope"),
    {
      ssr: false,
    }
  );


