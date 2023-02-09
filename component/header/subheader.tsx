import React from "react";

type Props = {};

export default function subheader({}: Props) {
  return (
    <div
      style={{
        background: " rgba(17, 17, 17, 0.05)",
        backdropFilter: "blur(100px)",
      }}
    >
      <div
        style={{
          display: "flex",

          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color:
              "linear-gradient(90.47deg, #FFFFFF 7.21%, #FFFFFF 77.64%, rgba(255, 255, 255, 0.65) 91.86%, rgba(255, 255, 255, 0.65) 92.8%)",
          }}
        >
          Hire professionals for your next big project
        </h1>
      </div>
    </div>
  );
}
