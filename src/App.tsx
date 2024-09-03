import './App.css'
import { CustomInput } from './CustomInput';


function App() {
  return (
    <>
      <CustomInput placeholder='Enter your name' keyName='name' keyValue='unknown' text='Name'/>
      <CustomInput placeholder='Enter your surname' keyName='surname' keyValue='unknown' text='Surname'/>
      </>
  )
}

export default App
