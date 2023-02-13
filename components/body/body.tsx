import { Typography, Button } from "@mui/material";
import React from "react";
import {
  StyledBox,
  StyleContainer,
  TypographyStyle,
  StyledImage,
} from "../../components/NotLoggedIn/style";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

type Props = {};

export default function Body({}: Props) {
  return (
    <StyledBox>
      <StyleContainer sx={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            justifyContent: "space-between",
          }}
        >
          <div style={{}}>
            <img src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1676210056/Vector_bhl799.png" />
            <div style={{ position: "absolute", top: "20px", left: "20px" }}>
              <img src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1676284777/Rectangle_23_twsonh.png" />
            </div>
            <div
              style={{
                position: "absolute",
                top: "70px",
                left: "70px",
              }}
            >
              <img
                style={{
                  width: "250px",
                  height: "250px",
                }}
                src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1676284777/Rectangle_23_twsonh.png"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "100px",
                left: "120px",
              }}
            >
              <img src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1676284365/Rectangle_24_zbaasi.png" />
            </div>
            <div
              style={{
                position: "absolute",
                top: "100px",
                left: "10px",
              }}
            >
              <img src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1676284365/Rectangle_aqetiw.png" />
            </div>
            <div
              style={{
                position: "absolute",
                top: "230px",
                left: "30px",
              }}
            >
              <img src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1676284365/Rectangle-2_hap2tw.png" />
            </div>
          </div>
          <div style={{ position: "absolute", width: "50%", right: "450px" }}>
            <Typography
              sx={{
                color: "#FFFFFF",
                textAlign: "center",

                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "56px",
              }}
            >
              Hire professional for your next big projects{" "}
            </Typography>
            <br></br>
            <Typography
              align="center"
              sx={{
                color: "#FFFFFF",
                textAlign: "center",

                fontStyle: "normal",
              }}
            >
              We’re different. Elverr is the only saas business platform that
              let’s you run your business on one platform, seamlessly across all
              digital channels.
            </Typography>

            <div
              style={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {" "}
              <Button
                variant="contained"
                size="large"
                endIcon={
                  <KeyboardBackspaceIcon sx={{ transform: "rotate(180deg)" }} />
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
                Join waitlist
              </Button>
              <Button
                variant="outlined"
                size="large"
                endIcon={
                  <KeyboardBackspaceIcon sx={{ transform: "rotate(180deg)" }} />
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
                Schedule a demo
              </Button>
            </div>
            <br></br>
            <Typography
              align="center"
              sx={{
                color: "#71717A",
                textAlign: "center",

                fontStyle: "normal",
              }}
            >
              {" Unlimited trials   .    No credit card required"}
            </Typography>
          </div>
          <img
            src={
              "https://res.cloudinary.com/dxsmdvaqq/image/upload/v1676282218/Earth_Illustration_x03bcj.png"
            }
          />
        </div>
        <div
          style={{
            background: "#143F1C",
            height: "100px",
            width: "100%",
            marginLeft: "10%",
            borderRadius: "50%",

            marginTop: "0px",

            filter: "blur(90.6654px)",
          }}
        ></div>
        <div>
          <img
            style={{ width: "100%", marginTop: "-100px" }}
            src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1676289836/Screenshot_2023-02-13_at_12.03.17_uwlnpk.png"
          />
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
