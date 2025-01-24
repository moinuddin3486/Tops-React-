
import './App.css'
import ClassCmp from './ClassCmp'
import Counter from './Counter'
import Curlybraces from './Curlybraces'
import DisplayNameUsProps from './DisplayNameUsProps'
import Hello from './Hello'
import USercard from './USercard'
function App() {
  

  return (
   <>
   <Hello />
   <ClassCmp />
   <Curlybraces />
   <DisplayNameUsProps name={"Hello, [name]!"} />
   <USercard name={"test"} age={22} city={"Dholka"} />
   <Counter />
   
   </>
  )
}

export default App
