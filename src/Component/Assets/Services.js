import React, { Component } from "react";
import { Container, Typography, Grid } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import machine1 from "../Assets/Assets_Logo/machine1.png";
import machine2 from "../Assets/Assets_Logo/machine2.png";
import machine3 from "../Assets/Assets_Logo/machine3.png";
import machine4 from "../Assets/Assets_Logo/machine4.png";
import { Link } from "react-router-dom";

class Services extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    const machines = [
      {
        image: machine1,
        name: "Shoulder Press Machine",
        description:
          "The shoulder press machine typically consists of a seat and a vertical bar or handles that you push upward. It primarily targets the deltoid muscles. To use it, sit down, adjust the seat height, and grasp the handles.",
      },
      {
        image: machine2,
        name: "Smith Machine Shoulder Press",
        description:
          "The Smith machine is similar to a barbell but guided by a fixed vertical track. Load the bar with the desired weight and stand or sit underneath it. Grasp the bar with an overhand grip, and then press it upwards to target the shoulder muscles.",
      },
      {
        image: machine3,
        name: "Motorized Treadmills",
        description:
          "Motorized treadmills are the most common and come with a built-in motor to move the belt automatically. You can adjust the speed and incline settings to control the intensity of your workout that work for you think for you",
      },
      {
        image: machine4,
        name: "Rowing Machine",
        description:
          "Rowing machines are a versatile option for people seeking a challenging and effective workout. They are particularly beneficial for those looking to improve cardiovascular fitness, build strength, and enhance overall endurance.",
      },
    ];

    return (
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white pt-20 text-center justify">
        <Carousel
          responsive={responsive} // Pass the responsive object as a prop
          swipeable={true}
          draggable={false}
          showDots={false}
          centerMode={false}
          focusOnSelect={false}
          ssr={true}
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {machines.map((machine, index) => (
            <div key={index} className="container px-5 py-24 mx-auto machine-card flex flex-col text-center w-full">
              <img
                src={machine.image}
                alt={machine.name}
                className="product-image"
              />
              <h3 className="font-bold">{machine.name}</h3>
              <p className="Price"></p>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{machine.description}</p>
              <p className="pt-3">
              <Link to="/contact"><button class="bg-sky-500 hover:bg-sky-700 ... rounded-full p-3">
                  Enquire Now
                </button></Link>
              </p>
            </div>
          ))}
        </Carousel>
        <header className="bg-cover bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16 mt-20">
          <Container>
            <Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    gutterBottom
                  >
                    Our Services
                  </Typography>
                  <Typography variant="body1" align="left" paragraph>
                    Gym Machine Manufacturing: At Projex2.0, we are industry
                    leaders in the manufacturing of gym machines. Our dedicated
                    team of engineers and designers creates innovative fitness
                    equipment that meets the highest standards of quality,
                    performance, and durability. Our range includes:
                    Cardiovascular machines: Treadmills, elliptical trainers,
                    stationary bikes, and more. Strength training equipment:
                    Weight machines, free weights, and functional trainers.
                    Group fitness and functional equipment: Ideal for group
                    classes and functional training spaces. Accessories and
                    enhancements: We offer a wide array of accessories o
                    complement your workout, from mats to resistance bands.
                  </Typography>
                </Grid>
              </Grid>
            </Typography>
          </Container>
        </header>
      </div>
    );
  }
}

export default Services;
