import React, { useState } from "react";
import * as Yup from "yup";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UserService from "../Services/UserService";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  emailId: Yup.string() // changed from 'email'
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone is required"), // changed from 'phone'
  agreeTerms: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

const AddUser = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "", // changed from 'email'
    phoneNumber: "", // changed from 'phone'
  });
  const [errors, setErrors] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
    validateField(name, inputValue);
  };

  const validateField = async (name, value) => {
    try {
      await validationSchema.validateAt(name, { [name]: value });
      setErrors({ ...errors, [name]: "" });
    } catch (error) {
      setErrors({ ...errors, [name]: error.message });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (Object.keys(errors).length === 0) {
      UserService.saveUser(formData)
        .then((response) => {
          console.log(response);
          setFormData({
            firstName: "",
            lastName: "",
            emailId: "", // changed from 'email'
            phoneNumber: "", // changed from 'phone'
          });
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Form is valid", formData);
    }
  };

  const validateForm = () => {
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        setErrors({});
      })
      .catch((validationErrors) => {
        const errorsObj = {};
        validationErrors.inner.forEach((error) => {
          errorsObj[error.path] = error.message;
        });
        setErrors(errorsObj);
      });
  };

  return (
    <div className="p-2 border-white border-double bg-white rounded-lg p-2">
      <button onClick={handleOpen} color="primary" variant="contained">
        Enquiry form!
      </button>
      <div>
        <div>
          <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>
              User Registration
              <IconButton onClick={handleClose} style={{ float: "right" }}>
                <CloseIcon color="primary" />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText align="center">
                Kindly fill all the details
              </DialogContentText>
              <Stack spacing={2} margin={2}>
                <TextField
                  name="firstName"
                  variant="outlined"
                  label="First Name"
                  value={formData.firstName}
                  onChange={(e) => handleChange(e)}
                />
                {errors.firstName && (
                  <div style={{ color: "red" }}>{errors.firstName}</div>
                )}
                <TextField
                  name="lastName"
                  variant="outlined"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleChange(e)}
                />
                {errors.lastName && (
                  <div style={{ color: "red" }}>{errors.lastName}</div>
                )}
                <TextField
                  name="emailId" // changed from 'email'
                  variant="outlined"
                  label="Email"
                  value={formData.emailId} // changed from 'formData.email'
                  onChange={(e) => handleChange(e)}
                />
                {errors.emailId && ( // changed from 'errors.email'
                  <div style={{ color: "red" }}>{errors.emailId}</div> // changed from 'errors.email'
                )}
                <TextField
                  name="phoneNumber" // changed from 'phone'
                  variant="outlined"
                  label="Phone"
                  value={formData.phoneNumber} // changed from 'formData.phone'
                  onChange={(e) => handleChange(e)}
                />
                {errors.phoneNumber && ( // changed from 'errors.phone'
                  <div style={{ color: "red" }}>{errors.phoneNumber}</div> // changed from 'errors.phone'
                )}
                <Button
                  onClick={handleSubmit}
                  color="primary"
                  variant="contained"
                >
                  Submit
                </Button>
              </Stack>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default AddUser;