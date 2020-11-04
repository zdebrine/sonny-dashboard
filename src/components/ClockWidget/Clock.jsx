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
    <Grid container direction="row" id="clock">
      <Grid item xs={6} className="p-3">
        <ThemedDigitalClock
          useDarkTheme={true}
          size={300}
          style={styles.darkTheme}
        />
      </Grid>
      <Grid item xs={6} className="p-3 dangerzone">
      </Grid>
    </Grid>
  );
};

export default ClockWidget;
