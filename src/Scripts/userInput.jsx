import '../Styles/userInput.css';
import { useState } from "react";

export function GetUserInput({ onSubmit }){
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSubmit(inputValue.trim());
    setInputValue('');
  }

  return (
    <>
      <form className='formComponents' onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="E.g London"
          className="locationInp"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button className='submitBtn' type="submit">Search 🔍</button>
      </form>
    </>
  );
}