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

class ArtistTab extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Button variant="fab" className={classes.button}>
          <AddIcon />
        </Button>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ArtistTab);
