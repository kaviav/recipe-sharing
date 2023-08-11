import React, { useEffect, useState } from "react";

import LocalPizzaIcon from "@mui/icons-material/LocalPizza";

import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    localStorage.setItem("selectedTab", value);
  }, [value]);

  useEffect(() => {
    const currentTab = localStorage.getItem("selectedTab");
    if (currentTab !== null) {
      setValue(Number(currentTab));
    }
  }, []);
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#ff5252" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "black" }}>
            <Typography>
              <LocalPizzaIcon />
            </Typography>
          </NavLink>

          <Tabs
            sx={{ ml: "auto", textColor: "black" }}
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              LinkComponent={NavLink}
              to="/add"
              label="Add recipe"
              sx={{ color: "black" }}
            />

            <Tab
              LinkComponent={NavLink}
              to="/recipes"
              label="recipes"
              sx={{ color: "black" }}
            />

            <Tab
              LinkComponent={NavLink}
              to="/contact"
              label="Contact Us"
              sx={{ color: "black" }}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
