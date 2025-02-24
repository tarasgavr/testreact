import {Button, Link } from "./components/index";
import "./App.css"
function App() {
  const click = () => console.log("You clicked me!")
  return (<div className='App'>
    <h1>СТОРІНКА ПРИКЛАДУ</h1>
    <Button click={click} buttonTxt="I'm button" />
    <Link click={click} linkTxt="I'm link" />
  </div>);
}

export default App;