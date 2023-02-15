"use client";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";


function Navbar() {
  

  return (
    <>
      <Box sx={{ flexGrow: 10 }}>
        <AppBar position="static">
          <Toolbar sx={{ height: "110px" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Box sx={{ width: "250px", flexGrow: 2.5 }}>
              <Typography variant="h6" component="div">
                PHẦN MỀM ÔN TẬP MÔ PHỎNG CÁC TÌNH HUỐNG GIAO THÔNG 120 câu hỏi
                mới nhất 02/2023 - Phiên bản 1.2.3
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
