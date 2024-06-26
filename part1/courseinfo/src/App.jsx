const Header = (props) => {
  return (  
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}
const Part = (props) => {
  return (  
    <div>
      <p>{props.name}</p>
    </div>
  )
}
const Content = (props) => {
  return (  
    <div>
      <Part name = {props.course.parts[0].name} />
      <Part name = {props.course.parts[1].name} />
      <Part name = {props.course.parts[2].name} />
    </div>
  )
}
const Total = (props) => {
  return (  
    <div>
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </div>
  )
}
/*
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
      <Total exercises = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}
*/

/*
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts}/>
      <Total parts = {parts} />
    </div>
  )
}
*/
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course} />
      <Content course = {course}/>
      <Total course = {course} />
    </div>
  )
}

export default App
