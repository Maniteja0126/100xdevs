
import './App.css'
import BusinessCard from './components/BusinessCard'

function App() {

  const interests =['Web Dev' , 'OpenSource','App Dev']

  return (
    <>
      <BusinessCard name={"Mani Teja"} description={"FullStack Developer"} interests={interests}/>
    </>
  )
}

export default App
