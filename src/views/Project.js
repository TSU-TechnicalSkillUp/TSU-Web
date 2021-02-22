// import React, { useEffect } from 'react';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Container,
    Button,
    Input,
    Chip,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
} from '@material-ui/core';
import ToastEditor from 'src/components/Editor';
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
    },
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
function getStyles(skill, useSkill, theme) {
    return {
        fontWeight:
            useSkill.indexOf(skill) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
const Project = () => {
    // const [] = useState();
    const theme = useTheme();
    const classes = useStyles();
    const [useSkills, setUseSkills] = React.useState([]);
    const [content, setContent] = React.useState([]);
    const handleUseSkillChange = (event) => {
        setUseSkills(event.target.value);
    };

    const handleContent = (e) => {
        console.log(e);
        setContent(e.target.$ref.editorRef);
    };

    const register = () => {
        
        console.log(content);
    }
    // useEffect(() => {

    // }, []);
    return (
        <Container>
            <div>
                <textarea style={{ resize: 'none', borderLeftColor: 'white', borderTopColor: 'white', borderRightColor: 'white', width: '80%' }} placeholder="제목을 입력하세요"></textarea>
            </div>
            <div>
                <label>프로젝트 인원
                <input type="number" placeholder="숫자를 입력해 주세욤."></input>
                </label>
                <FormControl className={classes.formControl}>
                    <InputLabel style={{ maxWidth: '100%' }} id="demo-mutiple-chip-label">사용 기술</InputLabel>
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
                                    <Chip key={value} label={value} className={classes.chip} />
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
                <></>
                <ToastEditor onChange={handleContent}/>
            </div>
            <Button className={classes.margin} onClick={register}>
                등록하기
            </Button>
        </Container>
    );
}

export default Project;