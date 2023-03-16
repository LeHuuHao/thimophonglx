import React, { useEffect } from 'react';

const App = () => {
  

  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 32) {
        console.log('Close')
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return(<p>Press ESC to console log "Close"</p>);
}