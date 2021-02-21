import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import ProjectCard from 'src/components/projectCard'
import { useInfinteScroll } from 'src/utils/Hooks'

const useStyles = makeStyles({
  root: {
    margin: '10px',
    display: 'flex',
    flexWrap: 'wrap'
  }
});

function createCards(dataList, setTarget) {
  // const dataListLen = dataList.length
  return dataList.map((testNum, index) => {
    // if (dataListLen === index - 1) {
    //   <ProjectCard key={testNum.toString()} ref={setTarget}></ProjectCard>
    // }
    return <ProjectCard key={testNum.toString()}></ProjectCard>
  })
}

function createDummyArr (start, num) {
  const result = new Array(num)
  result.fill(0)
  return result.map( (cur, index) => {
    return start + index
  })
}

export default function ProjectCards() {
  const classes = useStyles();
  const [target, setTarget] = React.useState(0)
  const [curShowIndex] = React.useState(0)
  const listItems = createCards(createDummyArr(curShowIndex, 50), setTarget.bind(this))

  console.log('프로젝트 카드들 생성')

  useInfinteScroll({
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        // 더 넣기
        console.log('더 추가하기')
      }
    }
  });

  const container = <div className={classes.root} ref={ setTarget }>{listItems}</div>

  return container
}
