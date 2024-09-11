
import { useInput } from "../hooks/useInput";
import { useDebounce } from "../hooks/useDebounce";
import '../App.css'
export function StateInput() {

    const username = useInput('', 15, 5)
    const debouncedInput = useDebounce(username.value, 1000)

    return (
        <>
        <div className='input-box'>
            <input type="text" placeholder='Enter to use useInput' value={username.value} onChange={username.onChange}/>
            <button className='button delete-btn' type="button" onClick={username.removeValue}></button>
        </div>
        <div className='info-box-with-error'>
            {username.error && 
            <span className="error">{username.error}</span>}
            {!username.error && 
            <p>Username: {debouncedInput}</p>} 
        </div>
        </>
    )
}