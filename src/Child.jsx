import { Button } from "./assets/customStyled"
import { changeState } from "./redux/slices"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

export default function Child(props){
  let dispatch=useDispatch()
    return(<>
    <h2>Child</h2>
    <Button onClick={()=>dispatch(changeState("child"))}>Click To Change Via Child</Button>
    </>)
}