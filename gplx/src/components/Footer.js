"use client";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/system";


function Footer() {

  return (
    <>
     <Container sx={{height:100,width:'100',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <Typography sx={{borderRightStyle:'solid',borderWidth:'thin',paddingRight:2}}>© Bản quyền 2022 bởi thimophong.net</Typography>
        <Typography sx={{borderRightStyle:'solid',borderWidth:'thin',paddingRight:2,marginLeft:2}}>Giới Thiệu</Typography>
        <Typography sx={{borderRightStyle:'solid',borderWidth:'thin',paddingRight:2,marginLeft:2}}>Chính Sách Bảo Mật </Typography>
        <Typography sx={{paddingRight:2,marginLeft:2}}>Liên Hệ </Typography>
     </Container>
    </>
  );
}

export default Footer;
