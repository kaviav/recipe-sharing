import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Box display="flex" flexDirection="column" alignItems="center">
        <>
          <img
            style={{
              marginTop: "10px",
              width: "200vh", // Customize the width
              height: "130vh", // Customize the height
            }}
            alt="pizza"
            src="https://realfood.tesco.com/media/images/Florentine-pizza-LGH-2cc73fa2-bc01-4120-8dbd-c364556b499b-0-1400x919.jpg"
          />
          <Button
            variant="contained"
            LinkComponent={Link}
            to="/recipes"
            sx={{
              marginTop: 3,
              background: "#e57373",
              fontSize: 25, // Custom text size
              // boxShadow: "2px 2px 4px #888888", // Custom shadow
              color: "#fff", // Custom text color
              transition: "background-color 0.3s", // Adding transition for smooth effect
              "&:hover": {
                background: "#ff8a80", // New background color on hover
              },
            }}
          >
            View all recipes
          </Button>
        </>
      </Box>
    </main>
  );
};

export default Home;
