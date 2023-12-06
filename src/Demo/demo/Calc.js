import React,{useRef} from 'react'


function Calc() {
  const val1=useRef(0);
  const val2=useRef(0);
  let s=0;
  const print=()=>
  {

    document.getElementById("out").innerHTML=s;
  }
  const plus=()=>
  {
    s=parseInt(val1.current.value)+parseInt(val2.current.value);
    print();
  }
  const minus=()=>
  {
    s=parseInt(val1.current.value)-parseInt(val2.current.value);
   print();
  }
  const multi=()=>
  {
    s=parseInt(val1.current.value)*parseInt(val2.current.value);
    print();
  }
  const divi=()=>
  {
    
    s=parseInt(val1.current.value)/parseInt(val2.current.value);
    print();
  
  }
  
  return (
    <div>
    <input ref={val1} placeholder='value1' type="number"></input>
    <input ref={val2} placeholder='value2' type="number"></input>
    <button onClick={plus}>+</button>
    <button onClick={minus}>-</button>
    <button onClick={multi}>*</button>
    <button onClick={divi}>/</button>
    <p id="out"></p>
    
    </div>
  )
}

export default Calc