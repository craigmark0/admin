import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import ArtistTab from "./ArtistsSection/ArtistsTab";
import SongsTab from "./SongsSection/SongsTab.js";
import "./App.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class App extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = idx => {
    this.setState({ value: idx });
  };

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange} fullWidth>
            <Tab label="Artists" />
            <Tab label="Songs" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <ArtistTab />
          <SongsTab />
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles)(App);
