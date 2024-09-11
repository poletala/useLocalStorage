import { useState } from "react";

export function useInput(inputValue: string, inputValueLength: number, inputValueLengthMin: number) {
    

    const [value, setValue] = useState(inputValue);
    const [error, setError] = useState<string| null>(null)

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const changedValue = event.currentTarget.value.trim()
        setValue(changedValue);   

        if (changedValue.length === 0) {
            setError("Input value is required")    
           return
        } 
        if (changedValue && changedValue.length <=  inputValueLengthMin) {
            setError(`Input value length must be greater than  ${inputValueLengthMin}`)
            return
        }
        if (changedValue.length >=  inputValueLength) {
            setError(`Input value length must be less than or equal to ${inputValueLength}`)
            return
        } else {
            setError(null)
           
        }
    }
    function removeValue() {
        setValue('');
    }

    return {value, onChange, removeValue, error }
}


