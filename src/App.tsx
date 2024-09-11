import './App.css'
import { CustomInput } from './components/CustomInput';
import { DebouncerInput } from './components/DebouncerInput';
import { ToggleTheme } from './components/ToggleTheme';
import { StateInput } from './components/StateInput';



function App() {
  return (
    <>
      <ToggleTheme/>
      <CustomInput placeholder='Enter your name' keyName='name' keyValue='unknown' text='Name'/>
      <CustomInput placeholder='Enter your surname' keyName='surname' keyValue='unknown' text='Surname'/>
      <DebouncerInput />
      <StateInput />

    </>  
  )
}

export default App
