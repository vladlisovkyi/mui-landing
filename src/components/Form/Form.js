import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Typography,
  Snackbar,
  Stack,
} from "@mui/material";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    setOpen(true);
    reset();
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        py: 16,
      }}
    >
      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <Typography variant="h4" gutterBottom textAlign={"center"}>
            Contact Us
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name && errors.name.message}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            {...register("message", { required: "Message is required" })}
            error={!!errors.message}
            helperText={errors.message && errors.message.message}
          />
          <Button type="submit" variant="contained" color="primary" sx={{mt: 4}}>
            Submit
          </Button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Message sent successfully!"
        />
      </Container>
    </Stack>
  );
};

export default Form;
