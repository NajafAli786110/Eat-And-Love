import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { IoBagCheckOutline } from "react-icons/io5";
import { CartData } from "../appConstantData/ProductsData";

const totalPrice = cartItems.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);

const Checkout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: {xs: "14px", md: "30px"},
        padding: { xs: "20px 10px 100px 10px", sm: "60px 20px 100px 20px" },
        color: "black",
      }}
    >
      {/* Billing Information Section */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" sx={{ fontFamily: "Ahsing, sans-serif" }}>
          Billing Information
        </Typography>
        <Divider sx={{ my: 2, backgroundColor: "var(--white-full)" }} />

        {/* Checkout Field */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            label="Full Name"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "var(--white-full)",
              },
            }}
          />
          <TextField
            label="Email Address"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "var(--white-full)",
              },
            }}
          />
          <TextField
            label="Address"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "var(--white-full)",
              },
            }}
          />
          <TextField
            label="City"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "var(--white-full)",
              },
            }}
          />
          <TextField
            label="Postal Code"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "var(--white-full)",
              },
            }}
          />
          <TextField
            label="Country"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "var(--white-full)",
              },
            }}
          />
        </Box>
      </Box>

      {/* Order Summary Section */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" sx={{ fontFamily: "Ahsing, sans-serif" }}>
          Order Summary
        </Typography>
        <Divider sx={{ my: 2, backgroundColor: "var(--white-full)" }} />

        {/* Order Summary Items */}
        <List sx={{
          padding: '0px'
        }}>
          {CartData.map((item) => (
            <ListItem key={item.id} sx={{
              padding: '10px 0px'
            }}>
              <img src={item.imageUrl} alt={item.name} style={{
                height: '40px',
                width: '40px',
                objectFit: 'cover',
                borderRadius: '100px',
                marginRight: '10px'
              }} />
              <ListItemText
                primary={`${item.name} x ${item.quantity}`}
                secondary={`$${item.price.toFixed(2)} each`}
              />
              <Typography>${item.price.toFixed(2) * item.quantity}</Typography>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2, backgroundColor: "var(--white-full)" }} />

        {/* Total Amount */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">${totalPrice.toFixed(2)}</Typography>
        </Box>

        {/* Checkout Button */}
        <Button
          variant="contained"
          startIcon={<IoBagCheckOutline />}
          fullWidth
          sx={{
            backgroundColor: "var(--primary-color)",
            borderRadius: "50px",
            textTransform: "capitalize",
            padding: "12px",
            marginTop: "20px",
          }}
        >
          Complete Purchase
        </Button>
      </Box>
    </Box>
  );
};

export default Checkout;
