import { useState } from "react";
import Input from "./components/input.component";
import Square from "./components/square.component";

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');

  return (
    <div className="App">
      <Square 
        colorValue={colorValue}
        hexValue={hexValue}
      />
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;
