import '../App.css'
import { useTheme } from '../hooks/useTheme'



export const ToggleTheme = () => {
    const {theme, toggleTheme} = useTheme()
    const bodyE = document.querySelector('body')
    if (bodyE?.classList.contains('light')) {
        bodyE?.classList.remove('light')
    } 
    bodyE?.classList.add(`${theme}`)
    return (
        <>
            <button className={`toggle-theme-btn`} type="button" onClick={toggleTheme}></button>
        </>
    )
}