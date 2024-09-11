import './App.css'
import { CustomInput } from './CustomInput';
import { DebouncerInput } from './DebouncerInput';
import { ToggleTheme } from './ToggleTheme';



function App() {
  return (
    <>
      <ToggleTheme/>
      <CustomInput placeholder='Enter your name' keyName='name' keyValue='unknown' text='Name'/>
      <CustomInput placeholder='Enter your surname' keyName='surname' keyValue='unknown' text='Surname'/>
      <DebouncerInput />
      </>
  )
}

export default App
