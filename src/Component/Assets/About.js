import React from 'react'
import { Container, Typography,Grid} from '@mui/material';
import machine2 from "../Assets/Assets_Logo/machine2.png"
export default function About() {
  return (
    <div>
        <header className="bg-cover bg-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16">
        <Container >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" align="left" paragraph className='mt-10 '>
          Projex 2.0 was born out of a shared passion for fitness and a commitment to making health and wellness accessible to everyone. In 1999, our founders set out on a mission to empower individuals to achieve their fitness goals by providing top-quality workout equipment and expert guidance.
              </Typography>
        </Container>
      </header>
      <section className="py-16 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <Container className=''>
          <Grid container spacing={3}>
            <Grid item xs={40} >
            <img src={machine2} alt="machine" align="left" className='transition-transform ease-in-out hover:translate-x-6'/>
              <Typography variant="h4" component="h2" align="right" className='mt-10 pt-20' gutterBottom >
              Our Vision
              </Typography>
              <Typography variant="body1" align="left" paragraph className='mt-10 '>
              At Projex 2.0, we envision a world where fitness isn't a luxury but a way of life. We believe that a healthier, stronger you is the first step toward a happier, more fulfilled life. Our vision is to be your trusted partner on this transformative journey. 
              </Typography>
              <Typography variant="body1" align="left" paragraph className='mt-10 '>
              When you choose Projex 2.0, you're not just buying equipment; you're becoming a part of a vibrant fitness community. Connect with fellow fitness enthusiasts, access expert tips, and embark on your fitness journey with confidence. 
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  )
}
