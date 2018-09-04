import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

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
  state = {
    isEditable: false
  };

  handleChange = () => {};
  toggleEdit = () => {
    this.setState(prev => ({ isEditable: !prev.isEditable }));
  };

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
        <div
          style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <Switch onChange={this.toggleEdit} />
          <FormHelperText style={{ height: "100%", alignSelf: "center" }}>
            edit
          </FormHelperText>
        </div>

        <FormGroup row style={{ justifyContent: "center" }}>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Artist Name</InputLabel>
            <Input
              id="name-disabled"
              value={"test"}
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Song Title</InputLabel>
            <Input
              id="name-disabled"
              value={"test"}
              onChange={this.handleChange}
            />
          </FormControl>
        </FormGroup>
        <FormGroup row style={{ justifyContent: "center" }}>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Audio File Name</InputLabel>
            <Input
              id="name-disabled"
              value={"test"}
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Audio File</InputLabel>
            <Input
              id="name-disabled"
              value={"test"}
              onChange={this.handleChange}
            />
          </FormControl>
        </FormGroup>
        {this.state.isEditable ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                SAVE
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(SongDetails);
