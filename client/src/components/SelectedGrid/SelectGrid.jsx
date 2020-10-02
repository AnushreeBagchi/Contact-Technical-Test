import React from "react";
import Card from "@material-ui/core/Card";
import {
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeConsumer } from "../../contexts/theme";

import Customer from "../Customer/Customer.jsx";

const useStyles = makeStyles((theme) => ({
  rowGrid: {
    marginTop: 10,
  },
}));

function SelectGrid(props) {
  const classes = useStyles();
  
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <Card className={`theme-${theme}`} elevation={3}>
          <Nav></Nav>
          <Grid container justify="flex-start">
            <Typography gutterBottom variant="h5" component="h2">
                Want to work with Contact? Use the form below to apply.
            </Typography>
            <Customer></Customer>
           
          </Grid>
        </Card>
      )}
    </ThemeConsumer>
  );
}

export default SelectGrid;
