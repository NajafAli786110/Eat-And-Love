import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const OrderManagement = () => {
  const orders = [
    {
      id: "001",
      customer: "Alice Johnson",
      date: "2024-10-25",
      status: "Pending",
      total: "$120",
    },
    {
      id: "002",
      customer: "Bob Smith",
      date: "2024-10-24",
      status: "Shipped",
      total: "$85",
    },
    {
      id: "003",
      customer: "Charlie Davis",
      date: "2024-10-23",
      status: "Pending",
      total: "$100",
    },
    {
      id: "004",
      customer: "Dana Lee",
      date: "2024-10-22",
      status: "Delivered",
      total: "$200",
    },
    {
      id: "005",
      customer: "Eve Thompson",
      date: "2024-10-21",
      status: "Shipped",
      total: "$150",
    },
  ];
  const labelsTop = [
    {
      label: "Order ID",
    },

    {
      label: "Customer",
    },
    {
      label: "Date",
    },
    {
      label: "Status",
    },
    {
      label: "Total",
    },
    {
      label: "Actions",
    },
  ];

  return (
    <Box sx={{ padding: "24px" }}>
      <Typography variant="h4" sx={{ fontWeight: "600", marginBottom: "24px" }}>
        Order Management
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: "16px" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f0f0f0" }}>
            <TableRow>
              {labelsTop.map((item, index) => (
                <TableCell key={index}>
                  <Typography sx={{
                    fontSize: '16px',
                    fontWeight: '600',
                    letterSpacing: '-0.8px'
                  }}>
                    {item.label}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      color:
                        order.status === "Pending"
                          ? "orange"
                          : order.status === "Shipped"
                          ? "blue"
                          : "green",
                      fontWeight: "500",
                    }}
                  >
                    {order.status}
                  </Box>
                </TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ marginRight: "8px" }}
                  >
                    View Details
                  </Button>
                  <Button variant="outlined" color="secondary" size="small">
                    Mark as Shipped
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderManagement;
