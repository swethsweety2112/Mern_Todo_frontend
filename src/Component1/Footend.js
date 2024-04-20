import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import ShareIcon from '@mui/icons-material/Share';
import '../Css1/Footend.css'
const Footend = () => {
  return (
    <div className='number'>
    <p>Contact us:</p>
    <a href="mailto:swethsweety2112@gmail.com">swethsweety2112@gmail.com</a>
    <br/>
    <span >
      <br/>
            <a href='https://www.instagram.com/' target='_blanck'> <InstagramIcon /></a>
            <a href="https://mail.google.com/mail/u/0/#inbox"><MailOutlineIcon/></a>
            <a href=""><CallIcon/></a>
            <ShareIcon></ShareIcon>

    </span > 
    <div class="social-icons">
      <a href="#" class="icon"><i class="fa fa-facebook"></i></a>
      <a href="#" class="icon"><i class="fa fa-twitter"></i></a>
      <a href="#" class="icon"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
    
  )
}

export default Footend
