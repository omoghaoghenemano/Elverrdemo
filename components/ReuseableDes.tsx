import { Divider, Typography } from "@mui/material";
import React from "react";
import {
  StyledBox,
  StyleContainer,
  TypographyStyle,
  StyledImage,
} from "../components/NotLoggedIn/style";
type Props = { image?: any; header?: any; subheader?: any };

function ReuseableDes({ image, header, subheader }: Props) {
  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div style={{ width: "100%" }}>
            {" "}
            <Typography
              sx={{
                color: "#FFFFFF",
                textAlign: "center",

                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "56px",
              }}
            >
              {header}
            </Typography>
            <Typography
              align="center"
              sx={{
                color: "#FFFFFF",
                textAlign: "center",

                fontStyle: "normal",
              }}
            >
              {subheader}
            </Typography>
          </div>{" "}
          <img
            style={{ width: "90%", height: "600px", objectFit: "contain" }}
            src={image}
          />
        </div>
      </StyleContainer>
    </StyledBox>
  );
}

export default ReuseableDes;
