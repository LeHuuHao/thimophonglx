"use client";
import "./App.css";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

function Video() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [second, setSecond] = useState(0);
  const handleProgress = (secs) => {
    // setSeconds(secs);
    document.body.onkeyup = function(e) {
      if (e.key == " " ||
          e.code == "Space"    
      ) {
        setSecond(secs)
      }
    }
  };
  
  
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        
        <Container maxWidth="md">
          <Typography>{second}</Typography>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
            width="800px"
            height="400px"
            playing={true}
            controls={false}
            onProgress={(e) => handleProgress(e.playedSeconds)}
          />
        </Container>
      )}
    </>
  );
}

export default Video;
