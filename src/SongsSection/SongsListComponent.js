import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SongDetails from "./SongDetails";

export const SongsListComponent = ({ songs }) => {
  return (
    <div style={tableContainer}>
      {songs.map(song => {
        return (
          <div key={song.id}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                style={rowContainer}
              >
                <div style={rowTitle}>
                  <div style={artistTitle}>{song.artist}</div>
                  <div style={songTitle}>{song.songTitle}</div>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div style={rowDetailsContainer}>
                  <SongDetails {...song} />
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        );
      })}
    </div>
  );
};

const tableContainer = {
  marginTop: "80px"
};

const rowTitle = {
  padding: "20px",
  display: "flex"
};

const rowContainer = {
  display: "flex"
};

const rowDetailsContainer = {
  display: "flex",
  width: "100%"
};

const songTitle = {
  marginLeft: "20px"
};
const artistTitle = {
  marginRight: "20px"
};
