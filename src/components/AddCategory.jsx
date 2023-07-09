import { useState } from "react"

export const AddCategory = ({onAddCategories}) => {

    const [inputValue, setInputValue] = useState("");

    const onChangeInput = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmitInput = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <=1) return; 
        onAddCategories(inputValue);
        setInputValue("");
    }

  return (
    <form onSubmit={onSubmitInput}>
        <input 
        placeholder="Ingrese el nombre del gif"
        type="text"
        value={inputValue} 
        onChange={onChangeInput}/>
    </form>
  )
}
