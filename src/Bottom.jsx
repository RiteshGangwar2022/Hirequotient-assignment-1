import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

const Bottom = () => {
  return (
    <div className="bottom" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box style={{ backgroundColor: "white", height: "2rem", width: "20rem", borderRadius: "10px", color: "#8247FF", marginTop: "5rem" }}>
        👋 WELCOME TO MANAGE WISE!
      </Box>
      <Box className="content animated-text" style={{ textAlign: "center", margin: "1rem" }}>
        <Typography variant="h1">Empower your business with</Typography>
        <Typography variant="h1"> <span style={{ color: "#FE8162" }}>Strategic</span> insights</Typography>
        <Typography variant="h5" color={"#767575"} style={{ marginTop: "1rem" }}>
          Powerful management platform designed to streamline your business
        </Typography>
        <Typography variant="h5" color={"#767575"}>
          operations, boost productivity, and drive success
        </Typography>
      </Box>
      <Box className="button animated-text" style={{ margin: "1rem" }}>
        <Button variant="contained" style={{ height: "4rem", width: "15rem", borderRadius: "20px", color: "white", fontWeight: "600", fontSize: "1.2rem", backgroundColor: "#8247FF",margin:"2rem"}}>
          Get Started
        </Button>
        <Button variant="outlined" style={{ height: "4rem", width: "15rem", borderRadius: "20px", color: "#1C1C1C", fontWeight: "600", fontSize: "1.2rem" }}>
          WATCH DEMO <PlayCircleFilledWhiteIcon/>
        </Button>
      </Box>
    </div>
  );
};

export default Bottom;
