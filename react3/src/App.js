import { Button, Link } from "./components/index";
import "./App.css"
const click = (Txt) => {
  alert(`You clicked ${ Txt }`)
}
function App() {
  return (<div className='App'>
    <h1>СТОРІНКА ПРИКЛАДУ</h1>
    <div className='table'>
      <Button click={click("button")} buttonTxt="I'm button" />
      <Link click={click("link")} linkTxt="I'm link" />
    </div>
  </div>);
}

export default App;