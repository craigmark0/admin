import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";

export default class MainMenu extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(prev => ({ open: !prev.open }));
  };

  render() {
    const { open } = this.state;
    return (
      <div style={{ display: "flex" }}>
        <AppBar>
          <Button onClick={this.handleToggle}>menu</Button>
          <Button onClick={this.handleToggle}>menu</Button>
          <Popper open={open} transition disablePortal>
            {({ TransitionProps, placement }) => {
              console.log(TransitionProps);
              console.log(placement);
              return (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: "center top" }}
                >
                  <Paper>
                    <MenuList>
                      <MenuItem>hello</MenuItem>
                      <MenuItem>goodbye</MenuItem>
                      <MenuItem>hello</MenuItem>
                    </MenuList>
                  </Paper>
                </Grow>
              );
            }}
          </Popper>
          {/*<MenuList>
          <MenuItem>hello</MenuItem>
          <MenuItem>goodbye</MenuItem>
          <MenuItem>hello</MenuItem>
        </MenuList>*/}
        </AppBar>
      </div>
    );
  }
}
