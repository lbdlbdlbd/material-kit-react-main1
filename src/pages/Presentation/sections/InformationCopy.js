/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
//import RotatingCard from "examples/Cards/RotatingCard";
//import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
//import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
//import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
//import bgFront from "assets/images/rotating-card-bg-front.jpeg";
//import bgBack from "assets/images/rotating-card-bg-back.jpeg";

import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import MKTypography from "components/MKTypography";
import post1 from "assets/images/examples/testimonial-6-2.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Mis postulaciones:
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={post1}
              title="La dificultad de encontrar un problema"
              description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Continuar leyendo",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={post1}
              title="La dificultad de encontrar un problema"
              description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Continuar leyendo",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={post1}
              title="La dificultad de encontrar un problema"
              description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Continuar leyendo",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={post1}
              title="La dificultad de encontrar un problema"
              description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Continuar leyendo",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
