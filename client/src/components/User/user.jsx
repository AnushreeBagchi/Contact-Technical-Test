import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import "./user.css";
import {
  adduser,
} from "../../store/actions/user";
import {
  DETAILS,
} from "../../constants/constants";
import { connect } from "react-redux";
import { ThemeConsumer } from "../../contexts/theme";
import { Container } from "@material-ui/core";
import TextFieldGenerator from "../TextFieldGenerator/TextFieldGenerator.jsx";
import Nav from "../Nav/Nav.jsx";

class user extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleChange = (e, field) => {
      this.props.adduser({ [field]: e.target.value });
    };
    const goToResult = () => {
      this.props.history.push({
        pathname: "/cards/",
        state: this.props.state,
      });
    };

   
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Nav></Nav>
              <Grid item xs={12} container>
                <Paper className={`paper theme-${theme}`}>
                  <Container>
                    <Grid container spacing={1}>
                      <Grid item xs={12} >
                        <form className="container">
                          
                          <TextFieldGenerator
                            textFields={DETAILS.textFields}
                          ></TextFieldGenerator>
                          
                          <Grid
                            container
                            spacing={1}
                            direction="row"
                            justify="center"
                            alignItems="center"
                          >
                            <Grid item lg={6} md={6} className="btn-grid">
                              <Button
                                className="btn"
                                variant="contained"
                                color="primary"
                                onClick={goToResult}
                              >
                                Submit
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                      </Grid>
                    </Grid>
                  </Container>
                </Paper>
              </Grid>
            </Grid>
          </>
        )}
      </ThemeConsumer>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  adduser: (data) => {
    dispatch(adduser(data));
  }
});

export {user};
export default connect(mapStateToProps, mapDispatchToProps)(user);
