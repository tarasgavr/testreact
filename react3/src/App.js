import Button from "./components/button";
import "./App.css"
function App() {
  const click = () => console.log("You clicked me!")
  return (<div className='App'>
    <h1>СТОРІНКА ПРИКЛАДУ</h1>
    <Button click={click} buttonTxt="I'm button" />
  </div>);
}

export default App;