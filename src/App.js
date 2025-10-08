import Child from "./Child"
import ClassCom from "./Components/ClassCom"
import Fun from "./Components/Fun"
import Jsx from "./JSX/Jsx"
import Parent from "./Props/Parent-Child/Parent"

function App() {
  var name1 = 'kohli'
  var name2 = 'dhoni'
  return <div>
    {/* <Fun name1 = {name1} />
    <Fun name2={name2} />
    <ClassCom/> */}
    {/* {new ClassCom().render()} */}
    {/* {Fun()} */}
    {/* <Jsx/> */}
    <Parent/>
  </div>
}

export default App