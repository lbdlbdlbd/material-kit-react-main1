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
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
//import bgImage from "assets/images/illustrations/illustration-reset.jpg";

import { Stack } from "@mui/material";

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "free download",
            color: "info",
          }}
        />
      </MKBox>
      <Grid component="section" py={{ xs: 0, lg: 6 }} alignItems="center">
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                La dificultad de encontrar un problema
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Empresa:"
                      placeholder="UADE"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Fecha de subida:"
                      placeholder="15/05/2023"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Fecha estimada de entrega:"
                      placeholder="15/12/2023"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      disabled
                    />
                  </Grid>
                </Grid>
              </MKBox>
              <MKTypography variant="body2" color="text" mb={3} pt={5} pb={5}>
                For further questions, including partnership opportunities, please email
                hello@creative-tim.com or contact using our contact form. For further questions,
                including partnership opportunities, please email hello@creative-tim.com or contact
                using our contact form. For further questions, including partnership opportunities,
                please email hello@creative-tim.com or contact using our contact form. For further
                questions, including partnership opportunities, please email hello@creative-tim.com
                or contact using our contact form. For further questions, including partnership
                opportunities, please email hello@creative-tim.com or contact using our contact
                form.
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Tags:"
                      placeholder="???"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Area:"
                      placeholder="Educacion - Investigacion - ETC"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Tecnologias:"
                      placeholder="???"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      disabled
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3} pt={3}>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      variant="standard"
                      label="Categorias:"
                      placeholder="???"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Subcategoria:"
                      placeholder="???"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Profesionales solicitados:"
                      placeholder="???"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      disabled
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  xs={12}
                  mt={5}
                  mb={2}
                >
                  <MKButton type="submit" variant="gradient" color="info">
                    Send Message
                  </MKButton>
                  <MKButton type="submit" variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
                <Stack direction="row" spacing={1} mt={3} justifyContent="center" xs={12}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Get Started
                  </MKButton>
                  <MKButton type="submit" variant="gradient" color="info">
                    Read more
                  </MKButton>
                </Stack>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
