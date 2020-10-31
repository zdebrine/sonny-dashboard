import React from "react";
import ThemedDigitalClock from "themed-digital-clock";
import Grid from "@material-ui/core/Grid";

const ClockWidget = () => {
  const styles = {
    darkTheme: {
      backgroundColor: "#02060e",
      digitColor: "#ffffff",
    },
    lightTheme: {
      backgroundColor: "#ffffff",
      color: "#ffffff",
    },
  };
  return (
    <Grid container direction="row" className="pt-5">
      <Grid item xs={3}></Grid>
      <Grid item xs={8} id="clock" className="p-5">
        <ThemedDigitalClock
          useDarkTheme={true}
          size={500}
          style={styles.darkTheme}
        />
      </Grid>
    </Grid>
  );
};

export default ClockWidget;
