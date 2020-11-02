import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      background: "#02060e",
      borderRadius: 3,
      border: 0,
      color: "white",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
  input: {
    color: "white",
  },
}));

const Settings = (props) => {
  const classes = useStyles();

  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const [keyboardLayout, setKeyboardLayout] = useState(false);

  const keyboard = useRef();

  const openKeyboard = () => {
      setKeyboardLayout(true);
  }

  const onChange = (input) => {
    setInput(input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  const onSubmit = () => {
    props.setArtTheme(input);
    setKeyboardLayout(false);
  }

  return (
    <Grid container direction="column">
      <h2 className="pt-5 pb-2">Art Type</h2>
      <Grid item xs={12}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            onClick={openKeyboard}
            value={input}
            onChange={onChangeInput}
            id="filled-full-width"
            variant="outlined"
            color="secondary"
            InputProps={{
              className: classes.input,
            }}
          />
        </form>
        {keyboardLayout ? 
        <Grid container direction="row" className="py-5">
          <Grid item md={3}></Grid>
          <Grid item md={6}>
            <Keyboard
              className="px-5"
              keyboardRef={(r) => (keyboard.current = r)}
              layoutName={layout}
              onChange={onChange}
              onKeyPress={onKeyPress}
              />
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
            : <div></div>
            }
        <Button variant="contained" color="secondary" className="py-2 my-3" onClick={onSubmit}>
          Secondary
        </Button>
      </Grid>
    </Grid>
  );
};

export default Settings;
