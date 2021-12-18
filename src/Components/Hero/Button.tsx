import React from 'react';
import { makeStyles } from '@mui/styles';
import button, { Button } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #fd9963 30%, #fd9963 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px #fffefe36',
        color: 'white',
        height: 38,
        width: 150,
        padding: '0 30px',
        margin: '100px',
    },
});

export default function Btn() {
    const classes = useStyles();
    return <Button className={classes.root}> Sign Up !</Button>;
}