import { Button, Link, buttonClick, linkClick } from "./components/index";
import "./App.css"

function App() {
  return (<div className='App'>
    <h1>СТОРІНКА ПРИКЛАДУ</h1>
    <div className='table'>
      <Button click={buttonClick} buttonTxt="I'm button" />
      <Link click={linkClick} linkTxt="I'm link" />
    </div>
  </div>);
}

export default App;