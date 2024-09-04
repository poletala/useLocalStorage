import './App.css'
import { useTheme } from './useTheme'


export const ToggleTheme = () => {
    const [theme, toggleTheme] = useTheme()

    if (document.querySelector('body')?.classList.contains('light')) {
        document.querySelector('body')?.classList.remove('light')
    } 
    document.querySelector('body')?.classList.add(`${theme}`)
    
    return (
        <>
            <button className={`toggle-theme-btn`} type="button" onClick={toggleTheme}></button>
        </>
    )
}