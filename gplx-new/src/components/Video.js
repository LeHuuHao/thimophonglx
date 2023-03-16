"use client";
import "./App.css";
import ReactPlayer from "react-player";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

function Video({item}) {
  const [domLoaded, setDomLoaded] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [second, setSecond] = useState(0);

  // useEffect(() => {
  //   const handleEsc = (event) => {
  //      if (event.keyCode === 32) {
  //       setSecond(seconds)
  //     }
      
  //   };
  //   window.addEventListener('keydown', handleEsc);

  //   return () => {
  //     window.removeEventListener('keydown', handleEsc);
  //   };
  // }, [seconds]);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
        
        <Box sx={{width:"100%",height:"45%"}}>
          <ReactPlayer
            url={"https://raw.githubusercontent.com/phonex34/kvideo2/master/video/th4.mp4"}
            width="100%"
            height="100%"
            playing={true}
            controls={false}
            onProgress={(e) => {setSeconds(e.playedSeconds)}}
          />
          <Box sx={{width:"100%",height:"14%",bgcolor:'#63b3ed',borderRadius:18,marginTop:"1%",display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Typography sx={{fontWeight:'bold',color:'white'}}> SPACE</Typography>
          </Box>
          <Typography sx={{textAlign:'center'}}> Nhấn phím cách khi phát hiện tình huống nguy hiểm</Typography>
        </Box>
      )}
    </>
  );
}

export default Video;
