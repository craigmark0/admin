import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class SongsTab extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ position: "relative", height: "100vh" }}>
        <div>All Songs</div>
        <Button
          variant="fab"
          className={classes.button}
          style={{ position: "absolute", right: "0" }}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(SongsTab);
