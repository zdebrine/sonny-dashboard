import React from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
  return (
    <div className="footer py-5 mt-3">
      <Grid container direction="row">
        <Grid item xs={2}>
          <p>Settings</p>
        </Grid>
        <Grid item xs={2}>
          <p>79</p>
        </Grid>
        <Grid item xs={2}>
          <p>82</p>
        </Grid>
        <Grid item xs={2}>
          <p>33</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
