import { useState } from "react";
import Input from "./components/input.component";
import Square from "./components/square.component";

function App() {
  const [colorValue, setColorValue] = useState('');

  return (
    <div className="App">
      <Square colorValue={colorValue}/>
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
      />
    </div>
  );
}

export default App;
