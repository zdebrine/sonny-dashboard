import React, {useState, useEffect} from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const LargeSwitch = withStyles((theme) => ({
  root: {
    width: 83,
    height: 57,
    padding: 0,
    /* margin: theme.spacing(1), */
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(30px)',
      color: '#ffffff',
      '& + $track': {
        background: 'linear-gradient(45deg, #0098f0 30%, #00649e 90%)',
        backgroundColor: '#0098f0',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#0098f0',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 55,
    height: 55,
  },
  track: {
    borderRadius: 80 / 2,
    border: `1px solid`,
    borderColor: '#b9c1d6',
    backgroundColor: '#ffffff',
    opacity: 1,
    /* transition: theme.transitions.create(['background-color', 'border']), */
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const DeviceSwitch = () => {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <LargeSwitch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}

export default DeviceSwitch;