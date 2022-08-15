import React from 'react'

const Input = ({ colorValue, setColorValue }) => {
  return (
    <form onSubmit={ (e) => e.preventDefault }>
        <label>Add color name: </label>
        <input 
            type="text" 
            autoFocus
            placeholder='Type color name'
            required
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
        />
        
    </form>
  )
}

export default Input