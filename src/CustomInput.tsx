import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';
import './App.css'


type Props = {
    placeholder: string,
    keyName: string,
    keyValue: string,
    text: string
}
export function CustomInput(props: Props) {

    const {value, setKeyValue, removeKeyValue} = useLocalStorage(props.keyName, props.keyValue);
    const [inputValue, setInputValue] = useState('')

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.currentTarget.value);
    }

    return (
        <>
        <div className='input-box'>
            <input type="text" placeholder={props.placeholder} value={inputValue} onChange={handleChange}/>
            <button className='button save-btn' type="button" onClick={() => setKeyValue(inputValue)}></button>
            <button className='button delete-btn' type="button" onClick={removeKeyValue}></button>
        </div>
        <div className='info-box'>
            <p>{props.text}: {value}</p>
        </div>
        </>
    )
}