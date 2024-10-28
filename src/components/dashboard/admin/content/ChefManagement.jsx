import React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  IconButton,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";

const ChefManagement = () => {
  const demoChefs = [
    {
      id: 1,
      name: "Chef Alex",
      specialty: "Italian Cuisine",
      email: "alex@example.com",
      imageUrl: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Chef Maria",
      specialty: "French Pastry",
      email: "maria@example.com",
      imageUrl: "https://via.placeholder.com/60",
    },
    // Add more demo data as needed
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: "32px" }}>
      <Typography variant="h4" fontWeight="600" marginBottom="24px">
        Chef Management
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Profile</TableCell>
              <TableCell align="center">Chef Name</TableCell>
              <TableCell align="center">Specialty</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoChefs.map((chef) => (
              <TableRow key={chef.id}>
                <TableCell align="center">
                  <Avatar src={chef.imageUrl} alt={chef.name} />
                </TableCell>
                <TableCell align="center">{chef.name}</TableCell>
                <TableCell align="center">{chef.specialty}</TableCell>
                <TableCell align="center">{chef.email}</TableCell>
                <TableCell align="center">
                  <IconButton color="success">
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton color="warning">
                    <CancelIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ChefManagement;
