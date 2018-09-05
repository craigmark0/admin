import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import {
  allGenreA,
  allGenreB,
  allVocals,
  allEnergy,
  allVibe
} from "../attributes";

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

class ArtistDetails extends React.Component {
  state = {
    isEditable: false,
    artist: this.props.artist,
    artistHeroImage: this.props.artistHeroImage,
    artistThumbnail: this.props.artistThumbnail,
    songPreviewName: this.props.songPreviewName,
    bio: this.props.bio,
    video: this.props.video,
    facebookLink: this.props.facebookLink,
    instagramLink: this.props.instagramLink,
    twitterLink: this.props.twitterLink,
    energy: this.props.energy,
    genre: this.props.genre,
    vibe: this.props.vibe,
    vocal: this.props.vocal,
    altImage1: this.props.altImage1,
    altImage2: this.props.altImage2,
    altImage3: this.props.altImage3
  };

  handleInputChange = e => {
    console.log(e.target.id);
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSelectChange = name => e => {
    this.setState({ [name]: e.target.value });
  };
  toggleEdit = () => {
    this.setState(prev => ({ isEditable: !prev.isEditable }));
  };

  render() {
    const { classes } = this.props;
    let {
      artist,
      artistThumbnail,
      songPreviewName,
      energy,
      genre,
      artistHeroImage,
      vibe,
      vocal,
      bio,
      video,
      facebookLink,
      instagramLink,
      twitterLink,
      altImage1,
      altImage2,
      altImage3
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
          <div style={{ display: "flex", width: "100px" }}>
            <Switch onChange={this.toggleEdit} />
            <FormHelperText style={{ alignSelf: "center", marginTop: "0px" }}>
              {this.state.isEditable ? <span>editing</span> : <span>edit</span>}
            </FormHelperText>
          </div>
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
            <Input
              id="artist"
              value={artist}
              onChange={this.handleInputChange}
            />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Song Preview Name</InputLabel>
            <Input
              id="songPreviewName"
              value={songPreviewName}
              onChange={this.handleInputChange}
            />
          </FormControl>

          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <TextField
              id="genre"
              select
              label="Genre"
              className={classes.textField}
              disabled={!this.state.isEditable}
              value={genre}
              onChange={this.handleSelectChange("genre")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {allGenreA.map(genre => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </TextField>
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
            <InputLabel>Artist Hero Image</InputLabel>
            <Input
              id="artistHeroImage"
              value={artistHeroImage}
              onChange={this.handleInputChange}
            />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Artist Thumbnail Image</InputLabel>
            <Input
              id="artistThumbnail"
              value={artistThumbnail}
              onChange={this.handleInputChange}
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
            <TextField
              id="vocal"
              select
              label="Vocal"
              className={classes.textField}
              disabled={!this.state.isEditable}
              value={vocal}
              onChange={this.handleSelectChange("vocal")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {allVocals.map(vocal => (
                <MenuItem key={vocal} value={vocal}>
                  {vocal}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <TextField
              id="vibe"
              select
              label="Vibe"
              className={classes.textField}
              disabled={!this.state.isEditable}
              value={vibe}
              onChange={this.handleSelectChange("vibe")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {allVibe.map(vibe => (
                <MenuItem key={vibe} value={vibe}>
                  {vibe}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <TextField
              id="energy"
              select
              label="Energy"
              className={classes.textField}
              disabled={!this.state.isEditable}
              value={energy}
              onChange={this.handleSelectChange("energy")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
            >
              {allEnergy.map(energy => (
                <MenuItem key={energy} value={energy}>
                  {energy}
                </MenuItem>
              ))}
            </TextField>
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
            <InputLabel>Bio</InputLabel>
            <Input id="bio" value={bio} onChange={this.handleInputChange} />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Video Url</InputLabel>
            <Input id="video" value={video} onChange={this.handleInputChange} />
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
            <InputLabel>Facebook Link</InputLabel>
            <Input
              id="facebookLink"
              value={facebookLink}
              onChange={this.handleInputChange}
            />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Instagram Link</InputLabel>
            <Input
              id="instagramLink"
              value={instagramLink}
              onChange={this.handleInputChange}
            />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Twitter Link</InputLabel>
            <Input
              id="twitterLink"
              value={twitterLink}
              onChange={this.handleInputChange}
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
            <InputLabel>Alternative Image 1</InputLabel>
            <Input
              id="altImage1"
              value={altImage1}
              onChange={this.handleInputChange}
            />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Alternative Image 2</InputLabel>
            <Input
              id="altImage2"
              value={altImage2}
              onChange={this.handleInputChange}
            />
          </FormControl>
          <FormControl
            className={classes.formControl}
            disabled={!this.state.isEditable}
          >
            <InputLabel>Alternative Image 3</InputLabel>
            <Input
              id="altImage3"
              value={altImage3}
              onChange={this.handleInputChange}
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

export default withStyles(styles)(ArtistDetails);
