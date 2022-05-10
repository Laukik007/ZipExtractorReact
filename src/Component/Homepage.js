import { Typography } from "@mui/material";
import React from "react";
import icon from "../download.svg";

export const Homepage = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "F9F9F9",
        height: "89vh",
        width: "100vw",
        flexWrap: "wrap",
        flexDirection: "columm",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "flex-end", margin: "2rem" }}
        >
          <img src={icon} style={{ marginRight: "0.8rem", width: "4rem" }} />
          <Typography variant="h5">Archive Extractor</Typography>
        </div>
        <div>
          <Typography variant="subtitle2">
            Archive Extractor is a small and easy online tool that can extract
            over 70 types of compressed files, such as 7z, zipx, rar, tar, exe,
            dmg and much more.
          </Typography>
        </div>
      </div>
    </div>
  );
};
