import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import { SongsListComponent } from "./SongsListComponent";

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

console.log(allSongs);
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
        <SongsListComponent songs={allSongs} />
      </div>
    );
  }
}

export default withStyles(styles)(SongsTab);
