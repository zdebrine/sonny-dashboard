import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import { Button, ButtonGroup } from "reactstrap";
import FloorplanCard from "./FloorplanCard.jsx";

const FloorplanParent = () => {
  const [isActive, setIsActive] = useState("breakdown");
  return (
    <div>
      <div className="toggled pb-5">
        <Grid item sm={12}>
          <ButtonGroup
            className="btn-group-toggle float-left"
            data-toggle="buttons"
          >
            <Button
              tag="label"
              className={classNames("btn-simple", {
                active: isActive === "breakdown",
              })}
              color="info"
              id="0"
              size="sm"
              onClick={() => setIsActive("breakdown")}
            >
              <input
                defaultChecked
                className="d-none"
                name="options"
                type="radio"
              />
              <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                Time Spent
              </span>
              <span className="d-block d-sm-none">
                <i className="tim-icons icon-single-02" />
              </span>
            </Button>
            <Button
              color="info"
              id="2"
              size="sm"
              tag="label"
              className={classNames("btn-simple", {
                active: isActive === "climate",
              })}
              onClick={() => setIsActive("climate")}
            >
              <input className="d-none" name="options" type="radio" />
              <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                Climate
              </span>
              <span className="d-block d-sm-none">
                <i className="tim-icons icon-tap-02" />
              </span>
            </Button>
            <Button
              color="info"
              id="2"
              size="sm"
              tag="label"
              className={classNames("btn-simple", {
                active: isActive === "marauder",
              })}
              onClick={() => setIsActive("marauder")}
            >
              <input className="d-none" name="options" type="radio" />
              <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                Marauder
              </span>
              <span className="d-block d-sm-none">
                <i className="tim-icons icon-tap-02" />
              </span>
            </Button>
          </ButtonGroup>
        </Grid>
      </div>
      <div>
        <FloorplanCard activeToggle={isActive} />
      </div>
    </div>
  );
};

export default FloorplanParent;
