import React from 'react';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1976D2',
    color: 'white',
    textAlign: 'center',
  };

  const iconStyle = {
    color: 'white',
    marginRight: '10px',
  };

  return (
    <div style={footerStyle}>
      <IconButton color="inherit" aria-label="Facebook" href="https://www.facebook.com">
        <FacebookIcon style={iconStyle} />
      </IconButton>
      <IconButton color="inherit" aria-label="Twitter" href="https://www.twitter.com">
        <TwitterIcon style={iconStyle} />
      </IconButton>
      <IconButton color="inherit" aria-label="instagram" href="https://www.instagram.com//">
        <InstagramIcon style={iconStyle} />
      </IconButton>
    </div>
  );
}

export default Footer;