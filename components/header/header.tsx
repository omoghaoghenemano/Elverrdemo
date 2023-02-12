import { Typography } from "@mui/material";
import React from "react";
import {
  StyledBox,
  StyleContainer,
  TypographyStyle,
  StyledImage,
} from "../../components/NotLoggedIn/style";

type Props = {};

export default function header({}: Props) {
  return (
    <StyledBox sx={{ borderBottom: "2px solid gray" }}>
      <StyleContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

            width: "100%",
          }}
        >
          <img
            style={{ width: "150px", height: "45px", objectFit: "contain" }}
            src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1676238024/Screenshot_2023-02-12_at_21.38.04_fyunwi-removebg-preview_u4nrmp.png"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
            }}
          >
            <Typography sx={{ color: "#FFFFFF", fontSize: "18px" }}>
              Explore
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "18px" }}>
              Categories
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "18px" }}>
              Projects
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "18px" }}>
              Contact Us
            </Typography>
          </div>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <div>English</div>
            <div>SignIn</div>
          </div>
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
