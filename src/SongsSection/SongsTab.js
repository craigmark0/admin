import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { filterAllSongs } from "./filterAllSongs";
import { ExpandableList } from "../list/ExpandableList";
import SongDetails from "./SongDetails";

import Papa from "papaparse";
import { songs } from "../songsCsvString";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const allSongs = Papa.parse(songs, { header: true }).data;
allSongs.map((song, i) => (song.id = i + 1));

//console.log(allSongs);

const RowTitle = props => (
  <div style={rowTitle}>
    <div style={songTitle}>{props.songTitle}</div>
    <div style={artistTitle}>{props.artist}</div>
  </div>
);

class SongsTab extends React.Component {
  state = {
    search: ""
  };

  handleSearch = e => {
    this.setState({ search: e.target.value });
    //console.log(e.target.value);
  };

  render() {
    const { classes } = this.props;
    return (
      <div style={{ position: "relative", height: "100vh" }}>
        <Button
          variant="fab"
          className={classes.button}
          style={{ position: "absolute", right: "37px", top: "10px" }}
        >
          <AddIcon />
        </Button>
        <TextField
          id="search"
          label="Search Songs"
          type="search"
          className={classes.textField}
          margin="normal"
          onChange={this.handleSearch}
        />
        <div style={{ padding: "50px" }}>
          <ExpandableList
            list={filterAllSongs(allSongs, this.state.search)}
            RowTitle={RowTitle}
            DetailsComponent={SongDetails}
          />
        </div>
      </div>
    );
  }
}

const songTitle = {
  marginRight: "20px",
  width: "15%",
  textAlign: "left"
};
const artistTitle = {
  marginLeft: "20px",
  fontStyle: "italic",
  color: "grey"
};
const rowTitle = {
  //padding: "20px",
  display: "flex",
  width: "100%"
};

export default withStyles(styles)(SongsTab);
