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

function createDummyArr (start, num) {
  const result = new Array(num)
  result.map( (cur, index) => {return start + index})
  return result
}

const classes = useStyles()
class ProjectCards extends React.Component {
  curNum = 10
  listItems = createCards(createDummyArr(0, curNum))
  render() {
    return <div className={classes.root}>{listItems}</div>
  }
}

export default ProjectCards
// export default function ProjectCards() {
//   React.useEffect(() => {
//     console.log('프로젝트 카드들')
//   })
//   const classes = useStyles();

//   const numbers = [0, 1, 2, 3, 4, 5, 6]
//   const listItems = createCards(numbers)
//   // const handleScroll = (event) => {
//   // }
  
//   // document.addEventListener('scroll', handleScroll)
//   // const handleInfiniteScrolling = (entries, observer) => {
//   //   const $last = [...entries].pop();
//   //   if ($last.isIntersecting) {
//   //     console.log('동작')
//   //   }
//   // };

//   const container = <div className={classes.root}>{listItems}</div>

//   // const ioOptions = {
//   //   root: null,
//   //   threshold: 1,
//   // };
//   // const io = new IntersectionObserver(handleInfiniteScrolling, ioOptions)
//   // io.observe(listItems[listItems.length - 1])

//   return container
// }
