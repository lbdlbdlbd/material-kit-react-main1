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
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
//import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
//import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
//import post2 from "assets/images/examples/testimonial-6-3.jpg";
//import post3 from "assets/images/examples/blog-9-4.jpg";
//import post4 from "assets/images/examples/blog2.jpg";

import { useState } from "react";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import Divider from "@mui/material/Divider";
import MKButton from "components/MKButton";
import CloseIcon from "@mui/icons-material/Close";

function Places() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Problematicas recomendadas de acuerdo a sus interes:
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}
            onClick={toggleModal}
          >
            <CenteredBlogCard
              image={post1}
              title="La dificultad de encontrar un problema"
              description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
              action={{
                type: "internal",
                route: "/contactUs",
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
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}></MKTypography>
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
                route: "/pages/landing-pages/contact-us",
                color: "info",
                label: "Continuar leyendo",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
        <Slide direction="down" in={show} timeout={500}>
          <MKBox
            position="relative"
            display="flex"
            //width={{ sm: "500px" }}
            flexDirection="column"
            justifyContent="center"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
            ml={3}
            mr={3}
          >
            <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
              <MKTypography variant="h5">
                ¡Gracias por tu interés en esta problemática!
              </MKTypography>
              <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
            </MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox p={2}>
              <MKTypography variant="body2" color="secondary" fontWeight="regular">
                para avanzar debes aceptar los términos de confidencialidad.
              </MKTypography>
            </MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox display="flex" justifyContent="space-between" p={1.5}>
              <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                Cerrar
              </MKButton>
              <MKButton variant="gradient" color="info" href="/contactUs">
                Aceptar
              </MKButton>
            </MKBox>
          </MKBox>
        </Slide>
      </Modal>
    </MKBox>
  );
}

export default Places;
