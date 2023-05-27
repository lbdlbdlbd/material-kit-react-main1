/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
//import MKButton from "components/MKButton";

import Icon from "@mui/material/Icon";

function CenteredBlogCard({ image, title, description, action }) {
  const cardActionStyles = {
    display: "flex",
    alignItems: "center",
    width: "max-content",

    "& .material-icons, .material-icons-round,": {
      transform: `translateX(2px)`,
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
      {
        transform: `translateX(6px)`,
      },
  };

  return (
    <Card
      sx={{
        background: "#D9D9D9",
      }}
    >
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3} textAlign="center">
        <MKBox
          component="img"
          src={image}
          alt={title}
          borderRadius="50%"
          width="60%"
          height="60%"
          position="relative"
          zIndex={1}
        />
      </MKBox>
      <MKBox p={3} mt={-1} textAlign="center">
        <MKTypography variant="h5" textAlign="center" gutterBottom>
          {title}
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="text">
            {description}
          </MKTypography>
        </MKBox>
        {action.type === "internal" ? (
          <MKTypography
            component={Link}
            to={action.route}
            variant="body2"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        ) : (
          <MKTypography
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="body2"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        )}
      </MKBox>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
CenteredBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default CenteredBlogCard;
