import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    height: "100%",
  },

  errorGrid: {
    color: "#7b7777",
  },

  btn: {
    marginTop: 10,
    justify: "center",
    alignItem: "center",
  },
  list : {
    fontSize :"large"
  }
});

const Result = (props) => {
  const handleClick = () => {
    props.history.push({
      pathname: "/",
    });
  };
  const classes = useStyles();
  const response = props.location && props.location.state;
  const isError = response.errors && response.errors.length ? true : false;
  const gridText = isError
    ? `Your form had below errors. Please review.`
    : `Your form submitted successfully. We will contact you soon.`;

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography
          className="cardName"
          gutterBottom
          variant="h5"
          component="h2"
        >
          <Grid container justify="center" className={classes.errorGrid}>
            <Grid item xs={12} md={6} lg={6}>
              <Typography variant="h6" className={classes.title}>
                <center>{gridText} </center>
              </Typography>
              {isError ? (
                <Grid container justify="center">
                  <List>
                    {response.errors.map((error, index) => (
                      <ListItem key={index} className = {classes.list}>
                        - {error.attribute} {error.message}.
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ) : null}
            </Grid>
          </Grid>
        </Typography>
        <Button
          className="btn"
          size="medium"
          color="primary"
          onClick={() => handleClick()}
        >
          Navigate to Home
        </Button>
      </CardContent>
    </Card>
  );
};

export default Result;
