import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from 'src/components/projectCard'

const useStyles = makeStyles({
  root: {
    margin: '10px',
    display: 'flex',
    flexWrap: 'wrap'
  }
});

function createCards(dataList) {
  return dataList.map((testNum) => {
    return <ProjectCard key={testNum.toString()}></ProjectCard>
  })
}
export default function ProjectCards() {
  React.useEffect(() => {

  })
  const classes = useStyles();

  const numbers = [0, 1, 2, 3, 4, 5, 6]
  const listItems = createCards(numbers)
  console.log('프로젝트 카드들')

  const container = <div className={classes.root}>{listItems}</div>

  return container
}
