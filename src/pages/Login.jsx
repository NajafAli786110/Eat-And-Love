import { LoginOutlined } from "@mui/icons-material";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { showAlert } from "../features/reducers/AlertPopupReducer";
import { login_user } from "../features/reducers/UserReducers";

const Login = () => {

  // Varibales / Assignment
  const loginStatus = useSelector((state) => state.users.loggedInStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // Functionlities

  // Edge Case || If logged in user come redirect it to dashboard
  useEffect(()=>{
    if (loginStatus.isLoggedIn) {
      dispatch(showAlert({message: 'You are Already Logged In', type: 'success'}))
    }
  },[])

  const onChangeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const LoginDataHandler = () => {
    dispatch(
      login_user({
        username: loginData.username,
        password: loginData.password,
      })
    );

    // Agar User Logged in Hogaya
    if (loginStatus.isLoggedIn) {
      // Sucees message Show karwao
      dispatch(
        showAlert({
          message: `You're logged in successfully! Welcome back!`,
          type: "success",
        })
      );

      // 1.2 sec baad navigate karwao
      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

      // Form ko Blank Karo (Edge Case)
      setLoginData({
        username: "",
        password: "",
      });
    }

    // Agar User Logged in na Ho paya
    else {
      dispatch(
        showAlert({
          message: "Incorrect Email Or Password",
          type: "error",
        })
      );
    }
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
          Enter Your Login Details
        </Typography>

        {/* Login FIELDS */}
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
            label="Enter Your Username"
            name="username"
            id="username"
            value={loginData.username}
            onChange={onChangeHandler}
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Enter Your Password"
            name="password"
            id="password"
            value={loginData.password}
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
            {/* Login Button */}
            <Button
              variant="contained"
              startIcon={<LoginOutlined />}
              sx={{
                backgroundColor: "var(--secondary-color)",
                borderRadius: "100px",
                textTransform: "capitalize",
                padding: "6px 24px",
              }}
              onClick={LoginDataHandler}
            >
              Login
            </Button>

            {/* Create Account Btn */}
            <Link
              to="/signup"
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
                Create an account
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
