import React from 'react'
import '../Css1/Home.css'
import { Typography } from '@mui/material'
import logo from '../images/logo.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Home = () => {
  return (
    <div >
<div>
<h1 align='center' >
      <img src={logo} alt="Logo" className="small-logo" />
      <h1 fontSize='40'>SWETHA V</h1>
      <a href="https://www.google.com/maps/place/Erode,+Tamil+Nadu/@11.4364735,76.722158,9z/data=!3m1!4b1!4m6!3m5!1s0x3ba96f682cb4b761:0x793da2d557cc2caf!8m2!3d11.5165278!4d77.2864879!16zL20vMDJsajdy?entry=ttu">Location<LocationOnIcon/>
    </a>


      </h1>
      </div>
      <h2>As For My Professional Endeavors..</h2>
      <h5 align='justify'>In my role as a technical trainer, I prioritize professional development by continuously expanding my proficiency across various programming languages and technologies. By remaining vigilant to industry updates and embracing new advancements, I ensure that my training programs are consistently aligned with the latest trends, equipping learners with the knowledge and skills needed to excel in today's fast-paced digital landscape.</h5>
     <h2>CAREER OBJECTIVE
</h2>
<h4> I am dedicated to continuously expanding my expertise, knowledge base, and skill .driven by a passion for lifelong learning and professional development.</h4>
<h2>QUALIFICATION</h2>
<div className="table-container"> 
      <table className="custom-table">
      <thead>
        <tr>
          <th>Qualification </th>
          <th>Name of the 
Institution </th>
          <th>Year of Passing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>B.E 
(Electronics And 
Communication) </td>
          <td>Muthayammal 
Engineering 
College 
(Autonomous), 
Rasipuram. </td>
          <td>2023 </td>
        </tr>
        <tr>
          <td>HSC</td>
          <td>Kongu Kalvi 
Nilayam Matric 
Higher 
Secondary, 
School,Erode</td>
          <td>2019</td>
        </tr>
        <tr>
          <td>SSLC</td>
          <td>Nirmala Matha 
Convent Matric 
Higher 
Secondary 
School,Erode.</td>
          <td>2017</td>
        </tr>
      </tbody>
    </table>

    </div>
  
        <Typography align='center'fontSize={27} fontStyle={"bold"}>
      Mobile No : 9626665548<br/>
Email ID : swethsweety2112@gmail.com<br/>
Address : 165/2 Rajeswari Nilayam, Bharathi Nagar,
 1 st Street,Moolapalayam, Erode – 638002<br/>
 </Typography>
 
    </div>

  )
}

export default Home
