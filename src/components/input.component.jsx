import colorNames from "colornames";
// colorName takes the name of the color and translate it to the corresponding  hex value

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) => {
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
        <button
            type="button" /*Since there's only one button the form assumes it's a submit. Define type button to avoid that */
            onClick={() => setIsDarkText(!isDarkText)} /* Set isDarkText to the oposite of it's current value (true|false)*/
        >
            Toogle text color
        </button>
        
    </form>
  )
}

export default Input