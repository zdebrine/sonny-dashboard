import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DeviceSwitch from './switch.jsx';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const DeviceCard = () => {
    return (
        <div className="device-card p-3 mt-4">
            <Grid container direction='row'>
                <Grid item xs={8}>
                    <h3>Shelf light</h3>
                    <p>On</p>
                </Grid>
                <Grid item xs={4}>
                    <IconButton color='primary'>
                        <DeleteIcon color='white' fontSize="large" />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}
export default DeviceCard;