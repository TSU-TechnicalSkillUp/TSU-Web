// import React, { useEffect } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Input,
    Button,
} from '@material-ui/core';
import ToastEditor from 'src/components/Editor';
import { Label } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    paper: {
        height: 140,
        width: 100,
    }
}));

const Project = () => {
    // const [] = useState();
    const classes = useStyles();
    // useEffect(() => {

    // }, []);
    
    return (
        <Container fixed>
            <div>
                <Label>제목</Label>
                <Input></Input>
            </div>
            <div>
                <Label></Label>
                <ToastEditor />
            </div>
            <Button className ={classes.margin}>
                등록하기
            </Button>
        </Container>
    );
}

export default Project;