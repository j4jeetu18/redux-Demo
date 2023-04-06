import { useDispatch } from "react-redux";
import { Button } from "./assets/customStyled";
import { changeState } from "./redux/slices";

export default function GrandChild(){
let dispatch=useDispatch()
    return(<>
    <h2>GrandChild</h2>
    <Button onClick={()=>dispatch(changeState("grandChild"))}>Click To Change Via GrandChild</Button>
    </>)
}