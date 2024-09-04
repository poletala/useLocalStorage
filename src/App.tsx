import './App.css'
import { CustomInput } from './CustomInput';
import { ToggleTheme } from './ToggleTheme';



function App() {
  return (
    <>
      <ToggleTheme/>
      <CustomInput placeholder='Enter your name' keyName='name' keyValue='unknown' text='Name'/>
      <CustomInput placeholder='Enter your surname' keyName='surname' keyValue='unknown' text='Surname'/>
      </>
  )
}

export default App
