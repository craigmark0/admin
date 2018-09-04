import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class SongDetails extends React.Component {
  handleChange = () => {};
  render() {
    const { classes } = this.props;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <FormGroup row>
          <FormControl className={classes.formControl}>
            <InputLabel>Artist Name</InputLabel>
            <Input
              id="name-disabled"
              value={"test"}
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl className={classes.formControl} disabled>
            <InputLabel>Song Title</InputLabel>
            <Input
              id="name-disabled"
              value={"test"}
              onChange={this.handleChange}
            />
          </FormControl>
        </FormGroup>
        <FormGroup row>
          <FormControl className={classes.formControl} disabled>
            <InputLabel>Name</InputLabel>
            <Input
              id="name-disabled"
              value={"test"}
              onChange={this.handleChange}
            />
          </FormControl>
        </FormGroup>
      </div>
    );
  }
}

export default withStyles(styles)(SongDetails);
