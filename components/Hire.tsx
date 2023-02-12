import { Button, Typography } from "@mui/material";
import React from "react";
import {
  StyledBox,
  StyleContainer,
  TypographyStyle,
  StyledImage,
} from "../components/NotLoggedIn/style";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

type Props = {};

export default function Hire({}: Props) {
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
                fontFamily: "DM Sans",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "56px",
              }}
            >
              Join our talent network
            </Typography>
            <Typography
              align="center"
              sx={{
                color: "#FFFFFF",
                textAlign: "center",
                fontFamily: "DM Sans",
                fontStyle: "normal",
              }}
            >
              By listing your job title on our website, you can showcase your
              expertise and connect with recruiters seeking to give candidate
              opportunities
            </Typography>
          </div>

          <div
            style={{
              objectFit: "contain",
              borderRadius: "20px",

              width: "90%",
              height: "600px",
              position: "relative",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url('https://res.cloudinary.com/dxsmdvaqq/image/upload/v1676214211/lookingtohire_rwjwv9.jpg')`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                background:
                  " radial-gradient(156.45% 156.45% at 49.95% -31.59%, rgba(0, 0, 0, 0) 29.2%, #000000 85.41%) !important",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                  gap: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={
                    <KeyboardBackspaceIcon
                      sx={{ transform: "rotate(180deg)" }}
                    />
                  }
                  sx={{
                    "textTransform": "none",
                    "background":
                      " linear-gradient(180deg, #34A422 17.22%, #98F33C 100%)",
                    "borderRadius": "10px",
                    "width": "227px",
                    "color": "#FFFFFF",
                    "&:hover": {
                      textTransform: "none",
                      background:
                        " linear-gradient(180deg, #34A422 17.22%, #98F33C 100%)",
                      borderRadius: "10px",
                      width: "227px",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Looking to Hire
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={
                    <KeyboardBackspaceIcon
                      sx={{ transform: "rotate(180deg)" }}
                    />
                  }
                  sx={{
                    "textTransform": "none",
                    "border": "2px solid #FFFFFF",
                    "width": "227px",
                    "borderRadius": "10px",
                    "color": "#FFFFFF",
                    "&:hover": {
                      textTransform: "none",
                      border: "2px solid #FFFFFF",
                      width: "227px",
                      borderRadius: "10px",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  No, I want a Job
                </Button>
              </div>
            </div>
          </div>
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
