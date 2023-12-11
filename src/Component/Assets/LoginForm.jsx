import React, { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import gym from "../Assets/Assets_Logo/dumbel.png";

const schema = yup.object({
  username: yup.string().min(3, "Username must be at least 3 characters").max(10, "Username cannot exceed 10 characters").required("Username is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").max(8, "Password cannot exceed 8 characters").required("Password is required"),
  confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  contactnumber: yup.number().typeError("Contact Number must be a number").min(10, "Contact Number must be at least 10 digits").required("Contact Number is required")
}).required();

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Register() {
  const [open, setOpen] = useState(false);
  const [isRegistration, setIsRegistration] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    // Add your registration or login logic here
    // For example, you can send the data to an API for registration or validation
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  const toggleForm = () => {
    setIsRegistration(!isRegistration);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Failed! Enter correct username and password.
        </Alert>
      </Snackbar>
      <div className="flex flex-col md:flex-row">
      <img src={gym} alt="gym" align="right" className="ml-1 "></img>
      <div className="bg-white p-8 rounded-lg shadow-lg md:w-96 h-3/6 mt-12">
          <h1 className="text-3xl font-semibold text-center mb-4">
            {isRegistration ? "Create Account" : "Login"}
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                {...register("username")}
                type="text"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Username"
              />
              {errors.username && (
                <p className="text-yellow-500 text-xs mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                {...register("password")}
                type="password"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-yellow-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            {isRegistration && (
              <>
                <div className="mb-4">
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-yellow-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    {...register("confirmpassword")}
                    type="password"
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                    placeholder="Confirm Password"
                  />
                  {errors.confirmpassword && (
                    <p className="text-yellow-500 text-xs mt-1">
                      {errors.confirmpassword.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    {...register("contactnumber")}
                    type="number"
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                    placeholder="Contact Number"
                  />
                  {errors.contactnumber && (
                    <p className="text-yellow-500 text-xs mt-1">
                      {errors.contactnumber.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <select
                    {...register("gender")}
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover-bg-blue-600 transition duration-300"
            >
              {isRegistration ? "Register" : "Login"}
            </button>
          </form>
          <p className="text-center mt-4">
            {isRegistration ? (
              <>
                Already have an account?{" "}
                <span
                  className="text-indigo-500 cursor-pointer"
                  onClick={toggleForm}
                >
                  Sign In
                </span>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <span
                  className="text-indigo-500 cursor-pointer"
                  onClick={toggleForm}
                >
                  Sign Up
                </span>
              </>
            )}
          </p>
      </div>
    </div>
    </div>
  );
}
