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
    <Grid container direction="row">
      <Grid item xs={6} id="clock" className="p-3">
        <ThemedDigitalClock
          useDarkTheme={true}
          size={400}
          style={styles.darkTheme}
        />
      </Grid>
    </Grid>
  );
};

export default ClockWidget;
