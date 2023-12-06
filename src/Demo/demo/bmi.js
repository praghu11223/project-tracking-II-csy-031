import React,{useRef}from 'react'

function Bmi() {
    const inputref1=useRef(null);
    const inputref2=useRef(null);
    
    const handleChange=() => {
        var stringe= '';
        var updated=0.00;

        updated = Math.round(inputref1.current.value/(inputref2.current.value*inputref2.current.value));
       if(updated<18.5)
           stringe="underweight";
    else if(updated>=30)
        stringe="obees";
    else if(updated>=25)
        stringe="overweight";
    else
        stringe="normal";
    document.getElementById("output").innerHTML=updated+"   "+stringe;
    };
    
  return (
    <div>
    <input  ref={inputref1} placeholder='weight' type="number"></input>
    <input ref={inputref2} placeholder='height' type="number"></input>
    <button onClick={handleChange}>display</button>
    <h2 id='output'></h2>

    </div>
  )
}

export default Bmi