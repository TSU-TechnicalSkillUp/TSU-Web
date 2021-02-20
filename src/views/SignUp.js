import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import http from 'src/utils/Http.js';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      minWidth: 500,
      maxWidth: 500,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
  }));
  function getStyles(skill, useSkill, theme) {
    return {
      fontWeight:
      useSkill.indexOf(skill) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  
const skills = [
    'VueJS',
    'ReactJS',
    'JavaScript',
    'Java',
    'C++',
    'Python',
    'NextJS',
    'NestJS',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const SignUp = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [useSkills, setUseSkills] = React.useState([]);
    const [interestSkills, setInterestSkills] = React.useState([]);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleUseSkillChange = (event) => {
        setUseSkills(event.target.value);
    };

    const handleInterestSkillChange = (event) => {
        setInterestSkills(event.target.value);
    };

    const signUp = () => {
        // console.log(age);
        // console.log(useSkills);
        // console.log(JSON.stringify(interestSkills));
        
        // http.get('/memberships').then(({data}) => {
        //     context.commit("setMember", data);
        // });
    };

    return (
        // <div style={{alignContent: 'center', justifyContent: 'center', width: '100%'}}>
        <Container style={{marginTop: 10, marginBottom: 20}}>
            <h1>환영합니다!</h1>
            <p>기본 회원 정보를 입력해주세요.</p>
            <form>
                <div>
                    <TextField id="standard-basic" label="이메일" className={classes.formControl}/>
                </div>
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={"0~1년차"}>0~1</MenuItem>
                            <MenuItem value={"2년차"}>~2</MenuItem>
                            <MenuItem value={"3년차"}>~3</MenuItem>
                            <MenuItem value={"4년차"}>~4</MenuItem>
                            <MenuItem value={"5년차"}>~5</MenuItem>
                            <MenuItem value={"6년차"}>~6</MenuItem>
                            <MenuItem value={"7년차"}>~7</MenuItem>
                            <MenuItem value={"8년차"}>8~</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel style={{maxWidth: '100%'}} id="demo-mutiple-chip-label">사용 기술</InputLabel>
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={useSkills}
                            onChange={handleUseSkillChange}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} className={classes.chip}/>
                                    ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                        >
                            {skills.map((skill) => (
                                <MenuItem key={skill} value={skill} style={getStyles(skill, useSkills, theme)}>
                                    {skill}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-chip-label">관심 기술</InputLabel>
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={interestSkills}
                            onChange={handleInterestSkillChange}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} className={classes.chip}/>
                                    ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                        >
                            {skills.map((skill) => (
                                <MenuItem key={skill} value={skill} style={getStyles(skill, interestSkills, theme)}>
                                    {skill}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </form>
            <Button style={{backgroundColor: 'green'}} onClick={signUp}>가입하기</Button>
            </Container>
    )
}

export default SignUp;