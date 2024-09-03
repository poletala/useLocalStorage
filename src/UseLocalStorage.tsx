import { useState } from 'react'

export const useLocalStorage = (key: string, initialValue: string) => {

    const localStorageValue = window.localStorage.getItem(key)

    function getValue() {
        return localStorageValue ? localStorageValue : initialValue;
    }

    const [value, setValue] = useState(getValue)

    function setKeyValue(value: string) {
        window.localStorage.setItem(key, value)
        setValue(value)
    }
    const removeKeyValue = () => {
        window.localStorage.removeItem(key)
        setValue('')
    }
    return {value, setKeyValue, removeKeyValue}
}