import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
function ContactList() {
  const contacts = [
    { name: "John Doe", email: "johndoe@example.com" },
    { name: "Jane Doe", email: "janedoe@example.com" },
    // Add more contacts here
  ];
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Contact List</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} style={{ padding: 20 }}>
        {contacts.map((contact, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5">{contact.name}</Typography>
                <Typography variant="body1">{contact.email}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 10 }}
                >
                  Contact
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default ContactList;
