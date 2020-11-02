import React, { useState } from "react";
import "./App.css";

// =============================================
// ================ COMPONENTS =================
// =============================================

import FloorplanParent from "./Floorplan/FloorplanParent.jsx";
import SensorInfo from "./SensorData/SensorInfo.jsx";
import ArtWidget from "./ArtWidget/ArtWidget.jsx";
import Clock from './ClockWidget/Clock.jsx';
import DeviceWidget from './DeviceWidget/DeviceWidget.jsx'
import Settings from './SettingsWidget/SettingsWidget.jsx'

// ============================================
// ================ STYLING ===================
// ============================================

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import StreetviewIcon from "@material-ui/icons/Streetview";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import SettingsIcon from "@material-ui/icons/Settings";
import SpaIcon from "@material-ui/icons/Spa";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const  App = () => {
  const [view, setView] = useState("widgetView");

  const [artTheme, setArtTheme] = useState('retro art');

  // ==========================================
  // ========== STATE HANDLERS ================
  // ==========================================

  const setWidgetView = (event) => {
    setView("widgetView");
  };

  const setMapView = () => {
    setView("mapView");
  };

  const setClockView = () => {
    setView("clockView");
  };

  const setDeviceView = () => {
    setView("deviceView");
  };

  const setSensorView = () => {
    setView("sensorView");
  };

  const setArtView = () => {
    setView("artView");
  };

  const setSettingsView = () => {
    setView("settingsView");
  };

  // =========================================
  // =========================================

  return (
    <div className="App">
      {view === "widgetView" ? (
        <section>
          <div className="py-5">
            <h1>Hi Zak</h1>
          </div>

          {/* Clock widget */}

          <Grid container direction="row" className="widgets py-5">
            <Grid item xs={4} className="py-5">
              <IconButton color="secondary" onClick={setClockView}>
                <AccessTimeIcon name="clockView" style={{ fontSize: 100 }} />
              </IconButton>
            </Grid>

            {/* Device widget */}

            <Grid item xs={4} className="py-5">
              <IconButton color="secondary" onClick={setDeviceView}>
                <BubbleChartIcon name="deviceView" style={{ fontSize: 100 }} />
              </IconButton>
            </Grid>

            {/* Map widget */}

            <Grid item xs={4} className="py-5">
              <IconButton color="secondary" onClick={setMapView}>
                <StreetviewIcon name="mapView" style={{ fontSize: 100 }} />
              </IconButton>
            </Grid>

            {/* Temp widget */}

            <Grid item xs={4} className="py-5">
              <IconButton color="secondary" onClick={setSensorView}>
                <AcUnitIcon name="sensorView" style={{ fontSize: 100 }} />
              </IconButton>
            </Grid>

            {/* Art widget */}

            <Grid item xs={4} className="py-5">
              <IconButton color="secondary" onClick={setArtView}>
                <SpaIcon name="artView" style={{ fontSize: 100 }} />
              </IconButton>
            </Grid>

            {/* Settings widget */}

            <Grid item xs={4} className="py-5">
              <IconButton color="secondary" onClick={setSettingsView}>
                <SettingsIcon name="settingsView" style={{ fontSize: 100 }} />
              </IconButton>
            </Grid>
          </Grid>
        </section>
      ) : 
      
      /* ================================================== */
      /* =================== VIEWS ======================== */
      /* ================================================== */

      view === "mapView" ? (
        <section className="floorplan-card">
          <IconButton color="secondary" onClick={setWidgetView}>
            <HomeOutlinedIcon name="widgetView" style={{ fontSize: 35 }} />
          </IconButton>
          <Grid container direction="row">
            <Grid item xs={12} className="m-5">
              <FloorplanParent />
            </Grid>
          </Grid>
        </section>

        /* =================== */
        /* ====== CLOCK ====== */
        /* =================== */

      ) : view === "clockView" ? (
        <section>
          <IconButton color="secondary" onClick={setWidgetView}>
            <HomeOutlinedIcon name="widgetView" style={{ fontSize: 35 }} />
          </IconButton>
          <Clock />
        </section>

        /* =================== */
        /* ==== SETIINGS ===== */
        /* =================== */

      ) : view === "settingsView" ? (
        <section>
          <IconButton color="secondary" onClick={setWidgetView}>
            <HomeOutlinedIcon name="widgetView" style={{ fontSize: 35 }} />
          </IconButton>
          <Settings setArtTheme={setArtTheme}/>
        </section>

        /* =================== */
        /* ====== SENSOR ===== */
        /* =================== */

      ) : view === "sensorView" ? (
        <section>
          <IconButton color="secondary" onClick={setWidgetView}>
            <HomeOutlinedIcon name="widgetView" style={{ fontSize: 35 }} />
          </IconButton>
          <Grid container direction="row">
            <Grid item xs={12} className="m-5">
              <SensorInfo />
            </Grid>
          </Grid>
        </section>

        /* =================== */
        /* ======= ART ======= */
        /* =================== */

      ) : view === "artView" ? (
        <section>
          <IconButton color="secondary" onClick={setWidgetView}>
            <HomeOutlinedIcon name="widgetView" style={{ fontSize: 35 }} />
          </IconButton>
          <ArtWidget theme={artTheme}/>
        </section>

        /* =================== */
        /* ====== DEVICE ===== */
        /* =================== */

      ) : view === "deviceView" ? (
        <section>
          <IconButton color="secondary" onClick={setWidgetView}>
            <HomeOutlinedIcon name="widgetView" style={{ fontSize: 35 }} />
          </IconButton>
          <DeviceWidget />
        </section>
      ) : (
        <div>NoView</div>
      )}
    </div>
  );
}

export default App;
