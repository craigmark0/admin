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
    margin: theme.spacing.unit,
    paddingBottom: "30px",
    width: "30%"
  }
});

class SongDetails extends React.Component {
  state = {
    isEditable: false,
    artist: this.props.artist,
    artistThumbnail: this.props.artistThumbnail,
    audioFileName: this.props.audioFileName,
    energy: this.props.energy,
    genreA: this.props.genreA,
    genreB: this.props.genreB,
    imageFileName: this.props.imageFileName,
    songLength: this.props.songLength,
    songTitle: this.props.songTitle,
    vibe: this.props.vibe,
    vocal: this.props.vocal
  };

  handleChange = e => {
    console.log(e.target.id);
    this.setState({ [e.target.id]: e.target.value });
  };
  toggleEdit = () => {
    this.setState(prev => ({ isEditable: !prev.isEditable }));
  };

  render() {
    const { classes } = this.props;
    const {
      artist,
      artistThumbnail,
      audioFileName,
      energy,
      genreA,
      genreB,
      imageFileName,
      songLength,
      songTitle,
      vibe,
      vocal
    } = this.state;
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

        <FormGroup
          row
          style={{
            justifyContent: "center",
            width: "90%",
            justifyContent: "flex-start",
            marginLeft: "50px"
          }}
        >
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Artist Name</InputLabel>
            <Input id="artist" value={artist} onChange={this.handleChange} />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Song Title</InputLabel>
            <Input
              id="songTitle"
              value={songTitle}
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Song Thumbnail Image</InputLabel>
            <Input
              id="artistThumbnail"
              value={artistThumbnail}
              onChange={this.handleChange}
            />
          </FormControl>
        </FormGroup>
        <FormGroup
          row
          style={{
            justifyContent: "center",
            width: "90%",
            justifyContent: "flex-start",
            marginLeft: "50px"
          }}
        >
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Audio File Name</InputLabel>
            <Input
              id="audioFileName"
              value={audioFileName}
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Audio File</InputLabel>
            <Input id="name-disabled" value={"test"} />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Audio Length</InputLabel>
            <Input
              id="songLength"
              value={songLength}
              onChange={this.handleChange}
            />
          </FormControl>
        </FormGroup>
        <FormGroup
          row
          style={{
            justifyContent: "center",
            width: "90%",
            justifyContent: "flex-start",
            marginLeft: "50px"
          }}
        >
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Genre A</InputLabel>
            <Input id="genreA" value={genreA} onChange={this.handleChange} />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Genre B</InputLabel>
            <Input id="genreB" value={genreB} onChange={this.handleChange} />
          </FormControl>
        </FormGroup>
        <FormGroup
          row
          style={{
            justifyContent: "center",
            width: "90%",
            justifyContent: "flex-start",
            marginLeft: "50px"
          }}
        >
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Vocal</InputLabel>
            <Input id="vocal" value={vocal} onChange={this.handleChange} />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Vibe</InputLabel>
            <Input id="vibe" value={vibe} onChange={this.handleChange} />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Energy</InputLabel>
            <Input id="energy" value={energy} onChange={this.handleChange} />
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
