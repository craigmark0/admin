import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import { ExpandableList } from "../list/ExpandableList";
import { artists } from "../artistsCsvString";
import TextField from "@material-ui/core/TextField";
import Papa from "papaparse";
import { filterAllArtists } from "./filterAllArtists";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const allArtists = Papa.parse(artists, { header: true }).data;
allArtists.map((artist, i) => (artist.id = i + 1));

const RowTitle = props => <div>{props.artist}</div>;

const DummyDetails = props => <div>{props.genre}</div>;

class ArtistsTab extends React.Component {
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
          label="Search Artists"
          type="search"
          className={classes.textField}
          margin="normal"
          onChange={this.handleSearch}
        />
        <div style={{ padding: "50px" }}>
          <ExpandableList
            list={filterAllArtists(allArtists, this.state.search)}
            RowTitle={RowTitle}
            DetailsComponent={DummyDetails}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ArtistsTab);
