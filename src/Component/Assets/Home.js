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
            <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">Welcome to Gymbulls/span>
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
            <Grid item xs={40}>
              <img
                src={machine1}
                alt="machine"
                align="left"
                className="transition-transform ease-in-out hover:scale-105 animate-fade-down"
              />
              <Typography
                variant="h4"
                component="h2"
                align="right"
                className="pt-20 text-white"
                gutterBottom
              >
                Join Our Community
              </Typography>
              <Typography
                variant="body1"
                className="text-left
"
                align="right"
                paragraph
              >
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
            <Grid item xs={40}>
              <Typography
                variant="h4"
                component="h2"
                align="center"
                gutterBottom
              >
                Our Commitment
              </Typography>
              <Typography variant="body1" align="left" paragraph>
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
