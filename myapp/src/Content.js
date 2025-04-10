import React from 'react'
import { useState } from 'react'
const Content = () => {
    const [name,setName]=useState(' ');
    function Changethename(){
        const names=['aadhi','hlo', 'nick']
        const  word  =Math.floor(Math.random()*names.length)
        setName(names[word])
    }

    const handleclick = (name1) => {
        console.log(`thaks for visiting ${name1}`)
    }
   /* const handleDoubleclick = (e) =>{
            console.log(e.target)
    }*/

    
  return (
  <main>
    <p onDoubleClick={()=> handleclick('aadhi')}>this the word {name}.</p>
    <button onClick={Changethename}> Click me</button>
  </main>
  
  )
}
export default Content
