import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";

const ProfileChef = () => {
  return (
    <Container sx={{ marginTop: "32px" }}>
      <Paper elevation={3} sx={{ padding: "24px", borderRadius: "16px" }}>
        {/* ProfileChef Picture Section */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ marginBottom: "24px" }}
        >
          <Box display="flex" alignItems="center" gap="16px">
            <Avatar
              src="https://via.placeholder.com/120"
              alt="ProfileChef Picture"
              sx={{ width: 120, height: 120 }}
            />
            <Typography variant="h5">ProfileChef Picture</Typography>
          </Box>
          <Button variant="outlined" color="success">
            Upload Image
          </Button>
        </Box>

        {/* Personal Information Section */}
        <Typography
          variant="h6"
          sx={{ marginBottom: "16px", fontWeight: "600" }}
        >
          Personal Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              required
              defaultValue="John"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              required
              defaultValue="Doe"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Personal Email"
              variant="outlined"
              fullWidth
              defaultValue="admin@gmail.com"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "50px",
                padding: "10px 20px",
                textTransform: "capitalize",
              }}
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProfileChef;
