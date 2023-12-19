import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import "tailwindcss/tailwind.css";
import machine1 from "./Assets_Logo/machine1.png";
import EnquiryForm from "../CommonComponents/EnquiryForm";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen">
      <header className="bg-cover bg-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16">
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
          <marquee behavior="" >Welcome to Gymbull</marquee>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Your Fitness Journey Starts Here
          </Typography>
          <Button className="bg-white">
            <EnquiryForm />
          </Button>
        </Container>
      </header>
      <section className="py-16 text-white">
        <Container className="">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} className="md:flex md:justify-center">
              <img
                src={machine1}
                alt="machine"
                className="transition-transform ease-in-out hover:scale-105 animate-fade-down w-full md:w-auto"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Join Our Community
              </Typography>
              <Typography variant="body1" paragraph>
                Explore our extensive range of workout equipment designed to
                help you reach your fitness goals.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="py-16 pt-10 text-white">
        <Container className="">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h2" gutterBottom>
                Our Commitment
              </Typography>
              <Typography variant="body1" paragraph>
                Our commitment to our customers is simple: to offer a curated
                selection of the finest workout equipment, backed by
                unparalleled customer support. We know that choosing the right
                fitness gear is essential, and we're here to guide you every
                step of the way.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Home;
