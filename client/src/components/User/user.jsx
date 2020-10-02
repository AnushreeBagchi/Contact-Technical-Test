import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./user.css";
import {
  fetchUser
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
  
  
  render() {
    const handleSubmit = async () => {
      await this.props.fetchUser(this.props.state.user);
      navigateToNextPage();
    };

    const navigateToNextPage = () => { 
      const response = this.props.state.user.response;
      if (response) {
        this.props.history.push({
          pathname: "/result/",
          state: response,
        });
      }
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
                                onClick={handleSubmit}
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
  fetchUser: (data) => {
    return dispatch(fetchUser(data));
  }
});

export {user};
export default connect(mapStateToProps, mapDispatchToProps)(user);
