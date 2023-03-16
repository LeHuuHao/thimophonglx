"use client";
import { Toolbar, Typography,styled,Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { display } from "@mui/system";


function Navbar() {
  const StyledToolBar=styled(Toolbar)({
    // display:'flex',
    justifyContent:'space-between',
    // borderBottomStyle:'solid'
  })
  const Icons = styled(Box)(({ theme }) => ({
    alignItems: "center",
    gap: "20px",
    display:"none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    }
  }));
 
  return (
    <>
    <AppBar position="fixed">
      <StyledToolBar>
        <Typography>Navbar</Typography>
       <Icons>
       <Typography>Ứng dụng IOS và Android</Typography>
       <Typography>Ôn tập 120 tình huống mô phỏng</Typography>
       <Typography>Thi thử mô phỏng </Typography>
       <Typography>Hướng dẫn</Typography>
       </Icons>
       <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{display:{xs:'block',sm:'block',md:'block',lg:'none'}}}
          >
            <MenuIcon />
          </IconButton>
      </StyledToolBar>
    </AppBar>
    </>
  );
}

export default Navbar;
