import React from "react";

type Props = {};

export default function header({}: Props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "3rem",
        }}
      >
        <div style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          Explore
        </div>
        <div style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          Categories
        </div>
        <div style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          Projects
        </div>
        <div style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          Contact Us
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
