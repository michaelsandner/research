import React from 'react';
import Level1 from './level1';

import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { RootState } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { levelSlice } from './reducer';
import { Button } from '@material-ui/core';
import Solution from './solution';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Progress() {
    const dispatch = useDispatch();
    const classes = useStyles();

    const selectLevel = (state: RootState) => state.level.level;
    const level = useSelector(selectLevel);

    return (

        <div className={classes.root}>
            <TabPanel value={level} index={0}>
                < Level1 />
            </TabPanel>
            <TabPanel value={level} index={1}>
                <h1>Level2</h1>
                <Solution />
            </TabPanel>

            <TabPanel value={level} index={2}>
                <div>
                    <h1>Level 3</h1>
                    <Button onClick={() => dispatch(levelSlice.actions.reset())}>Reset</Button>
                </div>
            </TabPanel>
        </div>
    )
}

export default Progress;