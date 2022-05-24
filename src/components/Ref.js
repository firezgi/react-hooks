import React, { useEffect, useRef, useState } from 'react'

function Ref() {
    const[name,setName]=useState('');
    const prevName=useRef()
    // const inputRef=useRef();

    // const focus=()=>{
        // console.log(inputRef.current)
        // inputRef.current.focus()
        // inputRef.current.value='Some value'

    // }
    // console.log(inputRef.current)

    useEffect(()=>{
      prevName.current=name

    },[name])

  return (
    <>
    {/* <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)
    }/> */}
    <input value={name} onChange={e=>setName(e.target.value)
    }/>
    <div >My name is {name} used to be {prevName.current}</div>
    
    {/* <button onClick={focus}>Focus</button> */}
    </>
  )
}

export default Ref