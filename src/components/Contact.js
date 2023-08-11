import {
  TextField,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    place: "",
    message: "",
    phone: "",
    feedback: "",
    callback: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/connect", {
        name: String(inputs.name),
        place: String(inputs.place),
        message: String(inputs.message),
        phone: Number(inputs.phone),
        feedback: String(inputs.feedback),
        callback: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => navigate("/"));
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={"230px"}
            marginRight="230px"
            marginTop={10}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />

            <FormLabel>Place</FormLabel>
            <TextField
              value={inputs.place}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="place"
            />

            <FormLabel>Message/Issue</FormLabel>

            <TextField
              value={inputs.message}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="message"
            />

            <FormLabel>Phone No</FormLabel>

            <TextField
              value={inputs.phone}
              onChange={handleChange}
              type="number"
              margin="normal"
              variant="outlined"
              name="phone"
            />

            <FormLabel>Feedback</FormLabel>

            <TextField
              value={inputs.feedback}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              name="feedback"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Callback Request"
            />

            <Button variant="contained" type="submit">
              Get to Us
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default Contact;
