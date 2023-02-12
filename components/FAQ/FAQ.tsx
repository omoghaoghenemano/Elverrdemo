import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Paper, Typography } from "@mui/material";

import { StyledBox, StyleContainer } from "../NotLoggedIn/style";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Avatar from "@mui/material/Avatar";
import PaidIcon from "@mui/icons-material/Paid";

import { fontFamily } from "@mui/system";

type Props = {
  firstheader?: any;
  secondheader?: any;
  thirdheader?: any;
  fourthheader?: any;
  firsttitle?: any;
  secondtitle?: any;
  thirdtitle?: any;
  fourthtitle?: any;
};

export default function NestedList({
  firstheader,
  secondheader,
  thirdheader,
  fourthheader,
  firsttitle,
  secondtitle,
  thirdtitle,
  fourthtitle,
}: Props) {
  const [open, setOpen] = React.useState(true);
  const [favorite, setFavorite] = React.useState(false);
  const [agency, setAgency] = React.useState(false);
  const [freelance, setFreelance] = React.useState(false);

  const handleFav = () => {
    setFavorite(!favorite);
  };
  const handleAgen = () => {
    setAgency(!agency);
  };
  const handleFreelance = () => {
    setFreelance(!freelance);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            background: "#262626",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            borderRadius: "20px",
            justifyContent: "center",
            padding: "4rem",
          }}
        >
          <List
            sx={{
              width: "100%",
              maxWidth: "70%",
              background: "#000000",
              border: " 2px solid #FFFFFF",
              boxShadow: " 0px 6px 16px rgba(52, 164, 34, 0.19)",
              borderRadius: " 14px",
              color: "white",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClick}
              sx={{ padding: "1.5rem 2rem" }}
            >
              <ListItemText primary={firstheader} />
              {open ? (
                <ExpandLess
                  sx={{
                    background: "#606367",
                    border: "2px solid #FFFFFF",
                    borderRadius: "50%",
                    fontSize: "30px",
                    transform: " rotate(180deg)",
                    color: "white",
                  }}
                />
              ) : (
                <ExpandMore
                  sx={{
                    background: "#606367",
                    border: "2px solid #FFFFFF",
                    borderRadius: "50%",
                    fontSize: "30px",
                    transform: " rotate(270deg)",
                    color: "white",
                  }}
                />
              )}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText
                    primary={firsttitle}
                    sx={{ color: "#6F6C90", fontFamily: "DM Sans" }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List
            sx={{
              width: "100%",
              maxWidth: "70%",
              background: "#000000",
              border: " 2px solid #FFFFFF",
              boxShadow: " 0px 6px 16px rgba(52, 164, 34, 0.19)",
              borderRadius: " 14px",
              color: "white",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleFav} sx={{ padding: "1.5rem 2rem" }}>
              <ListItemText
                primary={secondheader}
                sx={{ fontFamily: "DM Sans" }}
              />
              {favorite ? (
                <ExpandLess
                  sx={{
                    background: "#FFFFFF",

                    borderRadius: "50%",
                    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                    fontSize: "30px",
                    transform: " rotate(180deg)",
                    color: "#606367",
                  }}
                />
              ) : (
                <ExpandMore
                  sx={{
                    background: "#FFFFFF",

                    borderRadius: "50%",
                    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                    fontSize: "30px",
                    transform: " rotate(270deg)",
                    color: "#606367",
                  }}
                />
              )}
            </ListItemButton>
            <Collapse in={favorite} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary={secondtitle}
                      sx={{ color: "#6F6C90", fontFamily: "DM Sans" }}
                    />
                  </ListItemButton>
                </List>
              </List>
            </Collapse>
          </List>
          <List
            sx={{
              width: "100%",
              maxWidth: "70%",
              background: "#000000",
              border: " 2px solid #FFFFFF",
              boxShadow: " 0px 6px 16px rgba(52, 164, 34, 0.19)",
              borderRadius: " 14px",
              color: "white",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleAgen}
              sx={{ padding: "1.5rem 2rem" }}
            >
              <ListItemText primary={thirdheader} />
              {agency ? (
                <ExpandLess
                  sx={{
                    background: "#FFFFFF",

                    borderRadius: "50%",
                    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                    fontSize: "30px",
                    transform: " rotate(180deg)",
                    color: "#606367",
                  }}
                />
              ) : (
                <ExpandMore
                  sx={{
                    background: "#FFFFFF",

                    borderRadius: "50%",
                    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                    fontSize: "30px",
                    transform: " rotate(270deg)",
                    color: "#606367",
                  }}
                />
              )}
            </ListItemButton>
            <Collapse in={agency} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary={thirdtitle}
                      sx={{ color: "#6F6C90", fontFamily: "DM Sans" }}
                    />
                  </ListItemButton>
                </List>
              </List>
            </Collapse>
          </List>
          <List
            sx={{
              width: "100%",
              maxWidth: "70%",
              background: "#000000",
              border: " 2px solid #FFFFFF",
              boxShadow: " 0px 6px 16px rgba(52, 164, 34, 0.19)",
              borderRadius: " 14px",
              color: "white",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleFreelance}
              sx={{ padding: "1.5rem 2rem" }}
            >
              <ListItemText primary={fourthheader} />
              {freelance ? (
                <ExpandLess
                  sx={{
                    background: "#FFFFFF",

                    borderRadius: "50%",
                    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                    fontSize: "30px",
                    transform: " rotate(180deg)",
                    color: "#606367",
                  }}
                />
              ) : (
                <ExpandMore
                  sx={{
                    background: "#FFFFFF",

                    borderRadius: "50%",
                    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
                    fontSize: "30px",
                    transform: " rotate(270deg)",
                    color: "#606367",
                  }}
                />
              )}
            </ListItemButton>
            <Collapse in={freelance} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary={fourthtitle}
                      sx={{ color: "#6F6C90", fontFamily: "DM Sans" }}
                    />
                  </ListItemButton>
                </List>
              </List>
            </Collapse>
          </List>
        </div>
      </StyleContainer>
    </StyledBox>
  );
}
