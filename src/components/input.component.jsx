import colorNames from "colornames";
// colorName takes the name of the color and translate it to the corresponding  hex value

const Input = ({ colorValue, setColorValue, setHexValue }) => {
  return (
    <form onSubmit={ (e) => e.preventDefault }>
        <label>Add color name: </label>
        <input 
            type="text" 
            autoFocus
            placeholder='Type color name'
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value);
                setHexValue(colorNames(e.target.value));
            }}
        />
        
    </form>
  )
}

export default Input