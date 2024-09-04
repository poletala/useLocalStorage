import { useLocalStorage } from './UseLocalStorage'

export const useTheme = () => {
    const {value: theme, setKeyValue: setTheme} = useLocalStorage('theme', 'dark');
    const toggleTheme = () =>  {
        const themeNew = theme === 'light' ? 'dark' : 'light'
        setTheme(themeNew);
        
    }
    return {theme, toggleTheme}
    
}