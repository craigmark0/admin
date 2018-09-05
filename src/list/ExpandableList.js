import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const ExpandableList = ({ list, RowTitle, DetailsComponent }) => {
  return (
    <div style={tableContainer}>
      {list.map(rowData => {
        return (
          <div key={rowData.id}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                style={rowContainer}
              >
                <RowTitle {...rowData} />
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div style={rowDetailsContainer}>
                  <DetailsComponent {...rowData} />
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
