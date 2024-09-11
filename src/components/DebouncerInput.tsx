import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export function DebouncerInput() {

    const [inputValue, setInputValue] = useState('')
    

    const debouncedInput = useDebounce(inputValue, 1000)

    function inputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
        console.log(inputValue)
    }

    return (
        <>
        <div className='input-box'>
            <input placeholder='Enter to use useDebounce' value={inputValue} onChange={inputChange}/>     
        </div>
        <div className='info-box'>
            <p>{debouncedInput}</p>
        </div>
        </>
    )
}