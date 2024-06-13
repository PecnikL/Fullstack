import { useState } from 'react'


const StatisticLine = ({text, value, percentage}) => {
  if (percentage == true){ 
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
      
  }
  else 
  return (    
    <tr>      
      <td>{text}</td>
      <td>{value}</td>
    </tr>)
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if (all == 0){
    return (<div>No feedback given</div>)
  }
  else {
    return (
      <div>
        <table>
        <tbody>
        <StatisticLine text = 'good' value = {good} percentage = {false}/>
        <StatisticLine text = 'neutral' value = {neutral} percentage = {false}/>
        <StatisticLine text = 'bad' value = {bad} percentage = {false}/>
        <StatisticLine text = 'all' value = {all} percentage = {false}/>
        <StatisticLine text = 'average' value = {average} percentage = {false}/>
        <StatisticLine text = 'positive' value = {positive} percentage = {true}/>
        </tbody>
        </table>
      </div>
    )
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    const updatedAll = all + 1
    const updateAverage = (updatedGood - bad) / updatedAll
    const updatePositive = updatedGood / updatedAll
    setGood(updatedGood)
    setAll(updatedAll)
    setAverage(updateAverage)
    setPositive(updatePositive)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = all + 1    
    const updateAverage = (good - bad) / updatedAll
    const updatePositive = good / updatedAll
    setNeutral(updatedNeutral)
    setAll(updatedAll)
    setAverage(updateAverage)
    setPositive(updatePositive)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    const updatedAll = all + 1
    const updateAverage = (good - updatedBad) / updatedAll
    const updatePositive = good / updatedAll
    setBad(updatedBad)
    setAll(updatedAll)
    setAverage(updateAverage)
    setPositive(updatePositive)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all} average = {average} positive = {positive}/>
    </div>
  )
}

export default App