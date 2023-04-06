import React from 'react'
import Child from './Child';
import GrandChild from './GrandChild';
import { BigCtn, Button } from './assets/customStyled';
import { useDispatch, useSelector } from 'react-redux';
import { changeState } from './redux/slices';

function App() {
  let currentState = useSelector(globalStore => globalStore.heirarchyState.value)
  let activatingElem = useSelector(globalStore => globalStore.heirarchyState.activatingElem)
  console.log(currentState);
  let actionPayloadRef = React.useRef()
  // actionPayloadRef.current.innerHTML="action.payload"
  let dispatch = useDispatch()

  React.useEffect(() => { return () => { console.log("App component unmounted") } }, [])

  function handleClick(elem) {
    dispatch(changeState(elem))
  }

  return (
    <>
      <section id="heirarchy">
        <BigCtn className='BigCtn-ctn'>
          <h2>Parent</h2>
          <Button onClick={() => handleClick("parent")}>Click to Change Via Parents</Button>
        </BigCtn>
        <BigCtn className='BigCtn-ctn'><Child /></BigCtn>
        <BigCtn className='BigCtn-ctn'><GrandChild /></BigCtn>
      </section>
      <section id="common_state">
        <div style={{ textAlign: "left" }}>
          <h2 id='state'>{currentState}</h2>
          <em style={{ textAlign: "left", margin: "1% 6%" }}>dispatched function<br /></em>
          <br />
          <code style={{ letterSpacing: 0.35 }}>changeState (payload={`"${activatingElem}"`})</code>
          <br /><br />
          <em style={{ textAlign: "left", margin: "1% 6%" }}>
            1.looks in the store for the reducer which contains the action changeState <br /><br />
            2.finds that action changeState is present in heirarchyState reducer of store<br /><br />
            3.heirarchyState contains value of heirarchyReducer which is imported
            as the same from

            <span style={{ fontStyle: "normal", fontWeight: "300" }}> slice.js </span>
            heirarchialSlice.reducer</em>
        </div>

        <div id='code-SS'>
          <code className='multiline-code'>
            <h3>store.js</h3>
            export let store=configureStore&#40;&#123;
            reducer:&#123;
            <mark className='highlights'>heirarchyState</mark>:heirarchyReducer
            &#125;
            &#125;&#41;
            <br />
            <br />
          </code>


          <code className='multiline-code'>
            <h3>slices.js</h3>
            export let heirarchialSlice=createSlice&#40;&#123;
            name:"family",<br />
            initialState:&#123;value:"changed by noOne"&#125;,<br />
            reducers:&#123;<br />
            changeState: &#40;state,action&#41;=&gt;&#123;<br />
            state.value="changed By "+ <mark id="payload" className='highlights'>{activatingElem}</mark><br />
            &#125;
            &#125;
            &#41;
          </code>
        </div>
      </section>
    </>
  )
}

export default App
