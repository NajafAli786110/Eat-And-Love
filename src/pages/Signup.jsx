import { LoginOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    username: "",
    password: "",
    userRole: "",
    userEmail: "",
  });

  const onChangeHandler = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };
  const handleRoleChange = (event) => {
    setSignUpData({
      ...signUpData,
      userRole: event.target.value,
    });
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "60px 10px 100px 10px", md: "60px 0px 150px 0px" },
      }}
      maxWidth="xl"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          maxWidth: "600px",
          backgroundColor: "white",
          boxShadow: "3px 3px 8px rgb(0,0,0, 0.1)",
          borderRadius: "24px",
          padding: "38px",
          gap: "24px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "22px", md: "32px" },
            fontFamily: "Ahsing, sans-serif",
          }}
        >
          Creating an account
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            gap: "16px",
            width: "100%",
          }}
        >
          <TextField
            label="Enter Your Full Name"
            name="fullName"
            id="fullName"
            value={signUpData.fullName}
            onChange={onChangeHandler}
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Enter Your Email"
            name="userEmail"
            id="userEmail"
            value={signUpData.userEmail}
            onChange={onChangeHandler}
            type="email"
            variant="outlined"
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">User Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={signUpData.userRole}
              label="User Role"
              onChange={handleRoleChange}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="chef">Chef</MenuItem>
              <MenuItem value="hotelOwner">Hotel Owner</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Enter Your Username"
            name="username"
            id="username"
            value={signUpData.username}
            onChange={onChangeHandler}
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Enter Your Password"
            name="password"
            id="password"
            value={signUpData.password}
            onChange={onChangeHandler}
            type="password"
            variant="outlined"
            fullWidth
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: "8px",
            }}
          >
            <Button
              variant="contained"
              startIcon={<LoginOutlined />}
              sx={{
                backgroundColor: "var(--secondary-color)",
                borderRadius: "100px",
                textTransform: "capitalize",
                padding: "6px 24px",
              }}
            >
              Signup
            </Button>
            <Link
              to="/login"
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "300",
                  letterSpacing: "-0.4px",
                }}
              >
                Already have an account
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
