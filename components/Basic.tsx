import React from "react";
import {
  StyledBox,
  StyleContainer,
  TypographyStyle,
  StyledImage,
} from "../components/NotLoggedIn/style";
type Props = {};

export default function Basic({}: Props) {
  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            style={{ objectFit: "contain", width: "90%" }}
            src="https://res.cloudinary.com/dxsmdvaqq/image/upload/v1676220663/Screenshot_2023-02-12_at_16.50.56_ksnuxg.png"
          />
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
